const express = require('express');
const app = express();
const PORT = process.env.PORT;


//end point  de respuesta

app.get('/', (req, res) => {
    res.send('Integracion continua funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});