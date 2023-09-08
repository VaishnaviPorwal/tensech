const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const pantryId = "f1f10a03-88f1-4d5a-82ad-88f3b983ea9f";

const app = express();
const PORT = 9443;
app.use(bodyParser.json());



//Adding an item 
app.post("/add-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;
    const payload = req.body;

    const response = await axios.post(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`,
      payload
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Read Endpoint

app.get("/get-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;

    const response = await axios.get(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//Update Endpoint
app.put("/update-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;
    const payload = req.body;
 
    const response = await axios.put(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`,
      payload
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//Delete endpoint
app.delete("/delete-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;
    const response = await axios.delete(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});