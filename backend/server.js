const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
app.use("/api/auth", require("./routes/authRoutes"));

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chefmate Backend Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
