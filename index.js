const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const { connectDb } = require("./connection")

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

connectDb();


app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

console.log('Frontend URL:', process.env.FRONTEND_URL);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  


app.use(express.json())
app.use(cookieParser());
app.use("/api", routes)

app.listen(port, () => 
    console.log(`server is running on ${port}`)
);









