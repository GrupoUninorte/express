const express = require('express')
const rutas = express.Router() //obtenemos el metodo de rutas de express
const control = require('../controlador/user')

const path = 'user' //asignamos un punto de entrada en la ruta

rutas.get(`/`, control.getData) //solicitar datos

rutas.post(`/${path}`, control.insertData) // enviar datos

module.exports = rutas //exportamos todo lo de rutas
