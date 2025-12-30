const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { registerUser, loginUser } = require("./controllers/authController");

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));


// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/registerUsers")
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.log("❌ Error MongoDB:", err.message));


// Rutas POST para registro y login
app.post("/api/registro", registerUser);
app.post("/api/login", loginUser);

// Rutas GET para mostrar navegador
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

// ========== RUTA DE PRUEBA ==========
app.get("/api/test", (req, res) => {
  res.json({
    status: "ok",
    message: "API funcionando",
    timestamp: new Date(),
    endpoints: {
      registro: "POST /api/registro",
      login: "POST /api/login"
    }
  });
});


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});




