const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.send('Max Martinez Saavedra')
})


app.get('/clientes', (req, res) =>{
    res.sendFile(path.join(__dirname, 'clientes.html'));
})

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'productos.html'));
})


const port = process.env.PORT || 5000
app.listen(port,() => {
    console.log(`conexion realizada al puerto ${port}`)
})