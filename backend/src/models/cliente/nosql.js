import mongoose from "mongoose";
const { Schema, model } = mongoose;

const clienteSchema = new Schema({
    nombre: {
      type: String,
      required: true, // Equivalente a allowNull: false en Sequelize
      maxlength: 255
    },
    correo: {
      type: String,
      required: false, // Este campo puede ser nulo
      maxlength: 255
    },
    contrasena: {
      type: String,
      required: false, // Este campo puede ser nulo
      maxlength: 100
    },
  }, {
    timestamps: {
      createdAt: 'timestamp' // Personaliza el nombre del campo de timestamp
    }
  });

export default model("Clientes", clienteSchema);