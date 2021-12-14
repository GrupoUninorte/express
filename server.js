const express = require('express')
const app = express()
const userR = require('./rutas/user')
const db = require('./configuracion/db')
const port = 3001 //puerto por donde corre la app

// app.get('/', userR.getData)
//para que se pueda enviar los datos parseados
app.use(
    express.json({ 
        limit: '20mb'
    })
)

app.use(
    express.urlencoded({
        limit: '20mb'
    })
)

app.use(userR) //traemos todo lo de user.js que esta en rutas

app.listen(port, ()=>{ //para que corra en el puerto
    console.log('la app esta en linea');
})

db(); //conexion db