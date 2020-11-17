import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

///necesito
import ModelUsuario from "./src/models/UsersModel.js";
import listaUsuarios from "./src/controllers/usersController.js";
import router from "./src/routes/usersRoutes.js";

//conectar a la base de datos
mongoose.connect("mongodb://localhost:27017/dbusuarios", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//datos
const app = express();
app.use(bodyParser.json());
const puerto = 3000;
app.use(router); // desde aca

/////////////////////////////////////////////////////////////////////////////

app.listen(puerto, () => {
  console.log("server ejecutado");
});
