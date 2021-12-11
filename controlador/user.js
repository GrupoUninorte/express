const modelo = require('../model/m_user') //obtengo el esquema

exports.getData= (req, res)=>{  //pedir informacion
    res.send({
        data: 'hola estoy en user.js /controlador'
    })
}

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