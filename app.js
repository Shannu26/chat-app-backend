require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messages");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection has been established with MongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server has started on PORT: ${process.env.PORT}`);
});
