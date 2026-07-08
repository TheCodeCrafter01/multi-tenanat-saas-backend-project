
const express = require("express");
const app = express();
app.use(express.json());
const tenantRoutes = require("./routes/tenantroutes");


// Database connect


// Create an instance of Express


const homeRoutes = require("./routes/homeroutes");
const userRoutes = require("./routes/userroutes");

app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/tenants", tenantRoutes);



module.exports = app;