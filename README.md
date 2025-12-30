# API REST - Registro e Inicio de Sesión

## Descripción
Este proyecto es una API REST para manejar el registro y el inicio de sesión de usuarios.  
Utiliza Node.js, Express y MongoDB para gestionar usuarios con autenticación básica.

La API permite:  
- Registrar usuarios con nombre, email y contraseña.  
- Iniciar sesión validando email y contraseña.  

---

## Tecnologías usadas
- Node.js  
- Express  
- MongoDB / Mongoose  
- dotenv (variables de entorno)  
- nodemon (para desarrollo)  


## Instalación

1. Clonar el repositorio:

```bash
git clone https://tu-repositorio-url.git

```
2. Instalar dependencias:


```bash

npm install

```

3. Crear archivo .env en la raíz con las variables:

```bash

PORT=3000
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/nombre_BDdatos

```
4. Ejecutar el servidor en modo desarrollo:

```bash

npm run dev

```

5. Endpoints principales
   
```bash

POST http://localhost:3000/registro
POST http://localhost:3000/login


```

JSON esperado:

```bash

{
  "name": "Tu Nombre",
  "email": "email@dominio.com",
  "password": "tu_contraseña"
}

```

5. #APi para pruebas
   

<img width="1810" height="857" alt="image" src="https://github.com/user-attachments/assets/9a6d09b5-f71a-430a-b0aa-55ca0c7b51d3" />

<img width="1619" height="840" alt="image" src="https://github.com/user-attachments/assets/21e5ea82-effa-4679-b8be-a58cdd0875e9" />

<img width="1809" height="857" alt="image" src="https://github.com/user-attachments/assets/53fa2a93-25bd-4211-8701-b90d995606d5" />





