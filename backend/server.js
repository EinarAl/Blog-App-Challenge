const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const uri = "mongodb+srv://EA:213361eA@cluster0.5fcxqip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1
});

// Blog Schema
const blogSchema = {
  title: String,
  author: String,
  content: String
};

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB and start the server
async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    const db = client.db('blogDB');
    const blogsCollection = db.collection('blogs');

    // Routes
    app.post('/api/blogs', async (req, res) => {
      try {
        const result = await blogsCollection.insertOne(req.body);
        res.status(201).send(result);
      } catch (error) {
        res.status(500).send(error.message);
      }
    });

    app.get('/api/blogs', async (req, res) => {
      try {
        const blogs = await blogsCollection.find({}).toArray();
        res.status(200).send(blogs);
      } catch (error) {
        res.status(500).send(error.message);
      }
    });

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

run().catch(console.dir);
