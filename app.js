const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { registerUser, loginUser } = require("./controllers/authController");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Conectado correctamente a MongoDB"))
.catch(err => console.log("❌ Error de conexión:", err));

// Rutas POST para registro y login
app.post("/api/registro", registerUser);
app.post("/api/login", loginUser);

// Rutas GET para mostrar formularios HTML
app.get("/registro", (req, res) => {
  res.sendFile(__dirname + "/public/registro.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});






