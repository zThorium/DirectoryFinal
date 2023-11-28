import express from "express";
import { Router } from "express";
import { crearUsuario } from '../controllers/cliente/nosql/cliente.js';


const router = Router();

router.route('/login')
    .post(crearUsuario);





export default router;