# ToyServer Express.js API

This repository contains a simple Express.js server that provides API endpoints to manage toys. The server is hosted on Vercel and can be accessed at [https://toyserver.vercel.app](https://toyserver.vercel.app).

## API Endpoints

The following API endpoints are available:

    GET /toys: Get all toys data.
    GET /toys/:id: Get a toy by its ID.
    DELETE /toys/:id: Delete a toy by its ID.
    POST /addtoys: Add a new toy.
    GET /sellerlist/:email: Get all toys data by seller's email.
    GET /category/:categoryName: Get all toys data by category.

## Dependencies

The following dependencies are used in this project:

- `cors` (version 2.8.5)
- `dotenv` (version 16.0.3)
- `express` (version 4.18.2)
- `jsonwebtoken` (version 9.0.0)
- `mongodb` (version 5.5.0)

## Running the Server

To run the server locally, follow these steps:

1. Clone this repository: `git clone https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-shadikur.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`
4. The server will be running on `http://localhost:5008`.

## Environment Variables

The following environment variables are used in the project:

- `PORT`: The port on which the server runs (default: 5008).
- `MONGODB_URI`: The MongoDB connection URI.
- `JWT_SECRET`: The secret key used for JSON Web Token (JWT) authentication.

Make sure to set these environment variables when running the server locally or deploying it to a hosting platform.

## Help & Questions?

Feel free to explore the code and use it as a starting point for your own Express.js server to manage toys. If you have any questions or suggestions, please open an issue or reach out to the repository owner.
