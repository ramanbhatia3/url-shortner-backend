const express = require('express');
const { connectToMongoDB } = require("./connect.js")
const URL = require("./models/url.js")

const urlRoutes = require("./routes/url.js")

const app = express();
const PORT = 8000;

connectToMongoDB("mongo url here").then(() => console.log("MongoDB Connected Successfully!")).catch((err) => console.log("MongoDb Connection Failed:", err));

app.use(express.json());

app.use("/url", urlRoutes);

app.get("/:shortID", async (req, res) => {
  const shortID = req.params.shortID;
  const entry = await URL.findOneAndUpdate({
    shortID
  }, {
    $push: {
      visitHistory: { timestamp: Date.now() }
    }
  })
  res.redirect(entry.redirectURL);
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});