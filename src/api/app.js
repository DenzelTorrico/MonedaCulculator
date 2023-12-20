const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const DB_URI = "mongodb://0.0.0.0:27017/ReactCalculator"

mongoose.connect(DB_URI)
  .then(() =>
   
  console.log('Connected to MongoDB'))
  .catch((err) =>
   
  console.error('Error connecting to MongoDB:', err));


const userRoutes = require("./Routes/UserRoutes")
app.use("/api/users",userRoutes)

app.use(express.json())
module.exports = app