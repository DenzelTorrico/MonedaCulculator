const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');


app.use(cors())

const DB_URI = "mongodb://0.0.0.0:27017/ReactCalculator"

mongoose.connect(DB_URI)
  .then(() =>
   
  console.log('Connected to MongoDB'))
  .catch((err) =>
   
  console.error('Error connecting to MongoDB:', err));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const userRoutes = require("./Routes/UserRoutes")
app.use("/api/users",userRoutes)

module.exports = app