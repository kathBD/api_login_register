const User = require("../models/User");

// Registrar usuario
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
    }

    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: "El email ya está registrado" });
    }

    const nuevoUsuario = new User({ name, email, password });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: "✅ Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
  }
};

// Login de usuario
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ mensaje: "❌ Usuario no encontrado" });
    }

    if (usuario.password !== password) {
      return res.status(401).json({ mensaje: "❌ Contraseña incorrecta" });
    }

    res.status(200).json({ mensaje: `✅ Bienvenido ${usuario.name}, has iniciado sesión correctamente.` });
  } catch (error) {
    res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
  }
};

module.exports = { registerUser, loginUser };



