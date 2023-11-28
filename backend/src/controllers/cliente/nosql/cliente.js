import Usuario from '../../../models/cliente/sql.js';
const noSqlCliente = {};

export const crearUsuario = async (req,res,next)=>{
    const newUsuario = new Hotel(req.body)

    try{
        const usuarioGuardado = await newUsuario.save()
        res.status(200).json(usuarioGuardado)
    }catch(err){
        next(err)
    }
}