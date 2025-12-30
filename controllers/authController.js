const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);
    const { name, email, password } = req.body || {};
    
    if (!name || !email || !password) {
      return res.status(400).json({ 
        mensaje: "Faltan datos. Envía: name, email, password" 
      });
    }
    
    const existe = await User.findOne({ email });
    if (existe) {
      return res.status(400).json({ mensaje: "Email ya registrado" });
    }
    
    const nuevo = new User({ name, email, password });
    await nuevo.save();
    
    res.status(201).json({ 
      mensaje: "Usuario creado",
      usuario: { id: nuevo._id, name, email }
    });
  } catch (err) {
    console.error("Error registro:", err);
    res.status(500).json({ mensaje: "Error interno", error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body ;
    
    if (!email || !password) {
      return res.status(400).json({ mensaje: "Faltan email o password" });
    }
    
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ mensaje: "Usuario no existe" });
    }
    
    if (usuario.password !== password) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }
    
    res.json({ 
      mensaje: `Bienvenido ${usuario.name}`,
      usuario: { id: usuario._id, name: usuario.name, email }
    });
  } catch (err) {
    console.error("Error login:", err);
    res.status(500).json({ mensaje: "Error interno", error: err.message });
  }
};

module.exports = { registerUser, loginUser };