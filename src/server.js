require("dotenv").config();

const express = require("express");
const app = require("./app");

const connectDB = require("./config/db");

const tenantRoutes = require("./routes/tenantRoutes");
const userRoutes = require("./routes/userRoutes"); // 👈 add

app.use(express.json());

app.use("/tenant", tenantRoutes);
app.use("/user", userRoutes); // 👈 add

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});