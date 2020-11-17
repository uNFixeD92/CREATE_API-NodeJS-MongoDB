import express from "express";

const router = express.Router();
import listaUsuarios, {
  crearUsuarios,
  obtenerUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usersController.js";

router.get("/ver", listaUsuarios);
router.post("/crear", crearUsuarios);

router.get("/buscaUno/:IDD", obtenerUsuario);

router.put("/actualizar/:IDD", updateUsuario);

router.delete("/borrar/:IDD", deleteUsuario);

export default router;
