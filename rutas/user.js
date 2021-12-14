const express = require('express')
const rutas = express.Router() //obtenemos el metodo de rutas de express
const control = require('../controlador/user')
const path2 = 'update'
const path_d = 'delete'

const path = 'user' //asignamos un punto de entrada en la ruta

rutas.get(`/`, control.getData) //solicitar datos

rutas.post(`/${path}`, control.insertData) // enviar datos

rutas.put(`/${path2}/:id`, control.updateData) //modificar datos

rutas.delete(`/${path_d}/:id`, control.deleteData) //eliminar datos
 
module.exports = rutas //exportamos todo lo de rutas
