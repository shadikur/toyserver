// All the required modules
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 5008


// Middleware 
app.use(cors());
app.use(express.json());

// Connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@toycluster.dc1enre.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// ToyDB collection
const toyCollection = client.db(process.env.DB_NAME).collection('toysdata');

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        //----------- Endpoint routes starts here  ----------

        app.get("/toys", async (req, res) => {
            let limit = req.query.limit || 20;
            // Convert the limit to a number
            limit = parseInt(limit);
            // Find all toys data and apply the limit
            const result = await toyCollection.find().limit(limit).toArray();
            // Return the found documents
            res.status(200).send(result);
        });


        app.get("/toys/:id", async (req, res) => {
            const toyId = req.params.id;
            // Find the toy by its ID
            const result = await toyCollection.findOne({ _id: new ObjectId(toyId) });

            if (result) {
                // Toy found, return it
                res.status(200).send(result);
            }
            else {
                res.status(404).send({ 'item': 'NOT FOUND' })
            }
        });


        app.delete("/toys/:id", async (req, res) => {
            const toyId = req.params.id;
            // Find the toy by its ID
            const result = await toyCollection.deleteOne({ _id: new ObjectId(toyId) });
            res.status(200).send(result);
        });


        app.post("/addtoys", async (req, res) => {
            const toydata = req.body;
            // Insert the toy into the toyCollection
            const result = await toyCollection.insertOne(toydata);
            // Send response
            res.status(200).send(result)
        });

        app.get("/sellerlist/:email", async (req, res) => {
            const email = req.params.email;
            // Find all data with the specified email
            const result = await toyCollection.find({ email }).toArray();
            res.status(200).send(result);
        });

        app.get("/category/:categoryName", async (req, res) => {
            const categoryName = req.params.categoryName;
            let limit = req.query.limit || 20;
            // Convert the limit to a number
            limit = parseInt(limit);
            // Find all data with the specified category
            const result = await toyCollection.find({ category: categoryName }).limit(limit).toArray();
            // Return the found data
            res.status(200).send(result);
        })



        //------------- Endpoint routes ends here  ----------

    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.status(200).send({ "status": "API Server is running" })
})

app.listen(port, () => {
    console.log(`Toys API server is running on ${port}`);
})