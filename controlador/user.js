const modelo = require('../model/m_user') //obtengo el esquema
const mongoose = require('mongoose')

// exports.getData= (req, res)=>{  //pedir informacion
//     res.send({
//         data: 'hola estoy en user.js /controlador'
//     })
// }

// obtener datos
exports.getData = (req, res)=>{
    modelo.find({},(err, docs)=>{
        res.send({
            data: docs
        })
    })
}


//insertar datos
exports.insertData= (req, res)=>{  //insertar datos en la db
    const data = req.body 
    //res.send({data})
    //  modelo.collection.insertOne(data,(err, docs)=>{
      modelo.create(data,(err, docs)=>{
        if(err){
            console.log('error', err);
            res.send({error: err}, 422)
        }else{
            res.send({data: docs})
        }
    })

}

//funcion para parsear datos
const parserId = (id)=>{
    return mongoose.Types.ObjectId(id)
}


//modificar datos
exports.updateData = (req, res)=>{
    const {id} = req.params
    const body = req.body
    modelo.updateOne(
        { _id: parserId(id) },
        body,
        (err, docs)=>{
            if(err){
                res.send({
                    error: err
                })
            }else{
                res.send({
                    data: docs
                })
            }
        }
    )
}


//eliminar datos
exports.deleteData = (req, res)=>{
    const {id}= req.params

    modelo.deleteOne(
        { _id: parserId(id) },
        (err, docs)=>{
            if(err){
                res.send({
                    error: err
                })
            }else{
                res.send({
                    data: docs
                })
            }
        }
    )
}