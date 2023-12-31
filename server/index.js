const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    client.connect();

    const database = client.db("toysDB"),
      toys = database.collection("toys"),
      userToys = database.collection("userToys");

    app.get("/", (req, res) => {
      res.send(`<main>
      <h1>Hi, I&apos;m Johurul!</h1>
      <p>An aspiring front-end dev, creating high quality web apps.</p>
      <a href="https://www.linkedin.com/in/johurul-haque/">Linkedin</a>
      </main>`);
    });

    app.get("/toys", async (req, res) => {
      let query = {};

      if (req.query?.search) {
        query = { name: { $regex: req.query.search, $options: "i" } };
      }
      const cursor = await toys
        .find(query)
        .limit(20)
        .sort({ name: 1 })
        .toArray();

      res.send(cursor);
    });

    app.get("/toys/:id", async (req, res) => {
      const filter = { _id: new ObjectId(req.params.id) },
        cursor = await toys.find(filter).toArray();

      res.send(cursor);
    });

    app.get("/collection/:id", async (req, res) => {
      const filter = { _id: new ObjectId(req.params.id) },
        cursor = await userToys.find(filter).toArray();

      res.send(cursor);
    });

    app.delete("/collection/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) },
        result = await userToys.deleteOne(query);
      res.send(result);
    });

    app.put("/collection/edit/:id", async (req, res) => {
      const { price, available_quantity, detail_description } = req.body;

      const filter = { _id: new ObjectId(req.params.id) },
        options = { upsert: true },
        toy = {
          $set: {
            price: price,
            available_quantity: available_quantity,
            detail_description: detail_description,
          },
        };

      const result = await userToys.updateOne(filter, toy, options);
      res.send(result);
    });

    app.get("/collection", async (req, res) => {
      const cursor = userToys.find().sort({ name: 1 }),
        result = await cursor.toArray();

      res.send(result);
    });

    app.post("/collection/addtoy", async (req, res) => {
      const result = await userToys.insertOne(req.body);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close()
  }
}
run().catch(console.dir);

app.listen(port, () => console.log(`app listening on port: ${port}`));
