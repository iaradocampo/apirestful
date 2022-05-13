const express = require('express');
const app = express();
const routes = require("./routes/routes")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));
app.use('/api', routes);

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})