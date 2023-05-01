const express = require("express");
const cors = require("cors");

// redirect requests to microservices
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

// redirect
app.use("/customer", proxy("http://localhost:8001"));
// root endpoint
app.use("/", proxy("http://localhost:8002"));
app.use("/shopping", proxy("http://localhost:8003"));

app.listen(8000, () => {
  console.log("Customer service listening on port 8000");
});
