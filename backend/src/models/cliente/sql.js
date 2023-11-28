import mongoose from "mongoose";
const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Usuario", UsuarioSchema)