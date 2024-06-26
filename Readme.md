# 3D Printing Materials API

This project is a Node.js backend that manages information about various 3D printing materials. It includes functionalities for storing and retrieving images associated with each material using Amazon S3, and uses MongoDB to manage material data.

## Table of Contents

- [API Documentation](#api-documentation)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Dependencies](#dependencies)

## API Documentation

-Postman- https://documenter.getpostman.com/view/30488948/2sA3drJaiJ
-Drive- https://drive.google.com/file/d/19LrXw6pXU7k7WAEOt1es8WevV7HdcmCe/view?usp=sharing

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB (local or MongoDB Atlas)
- AWS S3 Bucket

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/3d-printing-materials-api.git
   cd 3d-printing-materials-api
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add your configuration variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   AWS_ACCESS_KEY_ID=your_aws_access_key_id
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   AWS_REGION=your_aws_region
   S3_BUCKET_NAME=your_s3_bucket_name
   ```

## Running the Server

Start the server using:

```sh
node server.js
```
