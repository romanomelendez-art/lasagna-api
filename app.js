const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// "base de datos"
let pedidos = [];

// endpoints
app.get("/pedidos", (req, res) => {
  res.json(pedidos);
});

app.post("/pedidos", (req, res) => {
  const nuevoPedido = req.body;
  pedidos.push(nuevoPedido);
  res.json(nuevoPedido);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});