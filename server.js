const express = require("express");
const app = express();
const cors = require("cors");
const bodyParsser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParsser.json());

mongoose.connect('mongodb://127.0.0.1:27017/fooddb', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use(require("./routes/index"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});