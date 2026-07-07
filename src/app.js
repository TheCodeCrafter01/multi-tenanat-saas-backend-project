
const express = require("express");
const app = express();
app.use(express.json());
const tenantRoutes = require("./routes/tenantRoutes");


// Database connect


// Create an instance of Express


const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/tenants", tenantRoutes);



module.exports = app;