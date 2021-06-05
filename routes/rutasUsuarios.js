const {Router} = require('express')

// importar los controladores
const {buscarUsuarios} = require('../controllers/controladorUsuarios.js')
const {agregarUsuarios} = require('../controllers/controladorUsuarios.js')
const {editarUsuarios} = require('../controllers/controladorUsuarios.js')
const {eliminarUsuarios} = require('../controllers/controladorUsuarios.js')

// importar las validaciones
const {validarPeticion} = require('../validations/validaciones.js')

// importar metodo check
const {check}= require('express-validator')

// creo lista de validaciones
// let validaciones = Array(
//     check('nombre',"Todos los campos son obligatorios").not().isEmpty(),
//     check('apellido',"Todos los campos son obligatorios").not().isEmpty(),
//     check('telefono',"Todos los campos son obligatorios").not().isEmpty(),
//     check('fechaInicio',"Todos los campos son obligatorios").not().isEmpty(),
//     check('fechaFinal',"Todos los campos son obligatorios").not().isEmpty(),
//     check('numeroPersonas',"Todos los campos son obligatorios").not().isEmpty(),
//     check('tipoPaquete',"Todos los campos son obligatorios").not().isEmpty(),
//     validarPeticion
// )



// personalizo las rutas
const rutas = Router()

// listado rutas
rutas.get('/usuarios',buscarUsuarios)
rutas.post('/usuario/nuevo',agregarUsuarios)
rutas.put('/usuario/editar/:id',editarUsuarios)
rutas.delete('/usuario/eliminar/:id',eliminarUsuarios)

// exporto rutas
module.exports = rutas

