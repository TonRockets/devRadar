const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes')
const cors = require('cors')
const app = express();

// mongoose.connect('mongodb+srv://wellington:eDKCrrIkRREfGABl@cluster0-ajxdx.mongodb.net/test?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

mongoose.connect("mongodb://localhost:27017/Omnistack", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Conectado com sucesso!")
})

app.use(cors())
app.use(express.json());
app.use(routes);

// Metodos básicos: GET, POST, PUT, DELETE;


// Tipos de parâmetros:

// Query Params: req.query (Filtros, ordenação, paginação, ...);
// Route Params: req.params (Identificar um recurso na alteração ou remoção);
// Body: req.body (Dados para a criação ou alteração de um registro);

// MongoDB 



app.listen(3333, () => {
    console.log('Rodando na porta 3333');
})