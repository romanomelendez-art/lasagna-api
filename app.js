const express = require("express")

const app = express()

// permite recibir JSON
app.use(express.json())

// "base de datos"
let pedidos = []

// ver menú
app.get("/menu", (req, res) => {
    res.json([
        { producto: "Lasaña Bolognesa", precio: 12000 },
        { producto: "Lasaña Pollo", precio: 11000 }
    ])
})

// crear pedido
app.post("/pedido", (req, res) => {
    const pedido = req.body

    // VALIDACIÓN
    if (!pedido.producto || !pedido.cantidad) {
        return res.json({
            error: "Faltan datos del pedido"
        })
    }

    pedidos.push(pedido)

    res.json({
        mensaje: "Pedido recibido",
        pedido: pedido
    })
})

// ver pedidos
app.get("/pedidos", (req, res) => {
    res.json(pedidos)
})


//
app.get("/test", (req, res) => {
    const pedido ={producto: " lasagna bolognesa"}

    pedidos.push(pedido)

    res.json({
        mensaje: "pedido de prueba agragado" ,
        pedidos: pedidos
     })
})

app.get("/enviar-pedido", (req, res) => {
    const pedido = {
        producto: "Lasaña Pollo",
        cantidad: 2
    }

    pedidos.push(pedido)

    res.json({
        mensaje: "Pedido enviado",
        pedido: pedido
    })

})

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
})