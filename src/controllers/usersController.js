import mongoose from "mongoose";
import ModelUsuario from "../models/UsersModel.js";


export const listaUsuarios = (req, res) => {
  ModelUsuario.find({}, (err, Response) => {
    if (err) {
      res.send(err);
    }
    res.send(Response);
  });
};

export const crearUsuarios = (req, res) => {
  let QT = new ModelUsuario(req.body);
  QT.save((err, response) => {
    if (err) {
      res.send(err);
    }
    res.send(response);
  });
};

export const obtenerUsuario = (req, res) => {
    ModelUsuario.findById(req.params.IDD, (err, response) => {
      if (err) {
        res.send(err);
      }
      res.send(response);
    });
  };
  

export const updateUsuario = (req, res) => {
ModelUsuario.findOneAndUpdate({_id:req.params.IDD},req.body,{new:true},
    (err,response)=>{
    if(err){
        res.send(err)
    }
    res.send(response)
})
};
export const deleteUsuario=(req,res)=>{
    ModelUsuario.deleteOne({_id:req.params.IDD},(err,response)=>{
        if(err){
            res.send(err)
        }
        res.json({message:'eliminado'})

    })
}


export default listaUsuarios;
