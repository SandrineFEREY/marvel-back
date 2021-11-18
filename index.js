const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());
require("dotenv").config();

// pe7SqbH23Z8ogZH0

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=pe7SqbH23Z8ogZH0"
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(4000, () => {
  console.log("Server started");
});
