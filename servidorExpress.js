const express = require('express')
const app = express();



app.get('/bienvenida', function (req, res) {
    const respuesta = `<html>
    <body>
    <h1 style="color = blue">Bienvenido
    </h1>
    </body>
    </html>`;
  res.send(respuesta)
})

app.listen(3000)