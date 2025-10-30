import express from "express";

const routerProduct = express.Router();

/////Rutas de Productos/////

routerProduct.get('/', (req, res) => {
    console.log("entro a la ruta home")
  res.send('pistaches')
})

routerProduct.post('/', (req, res) => {
    console.log("entro a la ruta home de post")
    const products = [
        {name: "cámara perro", id: "1"},
        {name: "micro y ya", id: "2"}
    ]
  res.json({"products":products});
})

export default routerProduct;