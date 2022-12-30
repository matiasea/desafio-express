const express = require('express');
const {productoManager} = require ("./index")

const app = express();
const port = 8080;

app.get("/productos", (req, res) => {
  const limite = req.query.limite;
  let productos = productoManager.getProducts();

  if(limite && !isNaN(Number(limite))){
    productos = productos.slice(0, limite)
  }
  res.send(productos);

})

app.get('/productos/:id', (req, res) => {
  let productos = productoManager.getProducts();
  const productoEncontrado = productos.find((e) => e.id === Number(req.params.id));
  res.send(productoEncontrado)
})


app.listen(port,() => {
  console.log("Servidor en el puerto", port)
})




app.listen(3000)