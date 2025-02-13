import { Router } from "express";
import { userAuth } from "../middleware/userAuth.js";

import {
    crearUsuario,
    obtenerUsuario,
    ingresarUsuario,
    actualizarUsuario,
    verificarToken
} from "../controllers/usuarioController.js";

const router = Router()

router.post('/crear', crearUsuario);
router.post('/login', obtenerUsuario)
router.post('/ingresar/:token', userAuth, ingresarUsuario)
router.put('/actualizar/:id/:token', userAuth, actualizarUsuario)
router.post('/verificar-token', verificarToken)

export default router