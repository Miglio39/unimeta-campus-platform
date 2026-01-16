const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenido a Unimeta Campus Platform 🚀");
});

app.listen(3000, () => {
  console.log("Servidor activo en http://localhost:3000");
});
