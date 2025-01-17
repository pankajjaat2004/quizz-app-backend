const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/route');
const connection = require('./models/connection.js');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/getdata", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  
  
app.get("/", (req, res) => {
    res.send("Hello World");
});
  
mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log('connection failed',err);
});