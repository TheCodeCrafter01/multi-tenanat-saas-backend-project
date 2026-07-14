const express = require("express");
const app = express();

app.use(express.json());

const homeRoutes = require("./routes/homeRoutes");
const tenantRoutes = require("./routes/tenantRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/tenants", tenantRoutes);

module.exports = app;