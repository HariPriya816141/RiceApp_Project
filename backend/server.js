const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
require('dns').setDefaultResultOrder('ipv4first');


dotenv.config();

const app = express();


app.use(cors({
    origin: [
      "http://localhost:5173",
      "rice-app-project-pc2hq4m3a-hari-priyas-projects-96ef1015.vercel.app"
    ],
    credentials: true,
  }));
  app.use(express.json());


// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));


console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));
