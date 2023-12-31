# API Express.js - Documentación

## Descripción
Bienvenido a la documentación de la API Express.js para la aplicación AWAMP (Awesome Web App for Managing Plants). Esta API proporciona endpoints para gestionar usuarios y plantas. La API está construida utilizando Express.js, y se puede ejecutar con Node.js.

## Información del Proyecto

- **Nombre del Proyecto:** AWAMP API
- **Versión:** 2.0.0
- **Autor:** StephanJ98
- **Licencia:** ISC

## Instalación
Para utilizar la API, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, sigue estos pasos:

1. Clona el repositorio desde GitHub:
   ```
   git clone https://github.com/StephanJ98/AWAMP_API.git
   ```

2. Instala las dependencias del proyecto utilizando npm:
   ```
   cd awamp-api
   npm install
   ```

   Para instalar las dependencias utilizando pnpm, ejecuta el siguiente comando:
   ```
   pnpm install
   ```

3. Crea un archivo `.env` en el directorio raíz del proyecto y configura las variables de entorno necesarias (por ejemplo, el puerto en el que se ejecutará la API y las credenciales de la base de datos si es necesario).

## Scripts

- **start:** Inicia la API en modo de producción utilizando `node index.js`.
- **dev:** Inicia la API en modo de desarrollo utilizando `nodemon index.js`, lo que permite la recarga automática del servidor al realizar cambios en el código.

Para ejecutar la API en modo de desarrollo utilizando npm, utiliza el siguiente comando:
```
npm run dev
```

Para ejecutar la API en modo de desarrollo utilizando pnpm, utiliza el siguiente comando:
```
pnpm dev
```

## Endpoints de la API

### Endpoints de Usuarios
- **Obtener un usuario por correo electrónico:** `GET /usuarios/:email`
- **Registrar un nuevo usuario:** `POST /usuarios`
- **Actualizar datos de un usuario:** `PUT /usuarios/:email`
- **Eliminar un usuario:** `DELETE /usuarios/:email`

### Endpoints de Plantas
- **Obtener todas las plantas:** `GET /plantas`
- **Obtener una planta por especie:** `GET /plantas/:species`
- **Registrar una nueva planta:** `POST /plantas`
- **Actualizar datos de una planta:** `PUT /plantas/:species`
- **Eliminar una planta:** `DELETE /plantas/:species`

---

> ## URL de la API [AWAMP](https://awamp-api.vercel.app)

## Detalles Endpoints de Usuarios 

  
### 1. Obtener un usuario por correo electrónico
  - **Endpoint:** `/usuarios/:email`
  - **Método:** `GET`
  - **Descripción:** Obtiene un usuario específico por su correo electrónico.
  - **Parámetros de Ruta:** `email` (Correo electrónico del usuario)
  - **Respuesta Exitosa:** Código de estado 200 y datos del usuario en formato JSON.
  - **Respuesta Fallida:** Código de estado 404 si el usuario no se encuentra.

### 2. Registrar un nuevo usuario
  - **Endpoint:** `/usuarios`
  - **Método:** `POST`
  - **Descripción:** Registra un nuevo usuario.
  - **Datos del Cuerpo:** Objeto JSON con información del usuario (email, nombre, password).
  - **Respuesta Exitosa:** Código de estado 200 y datos del usuario registrado en formato JSON.
  - **Respuesta Fallida:** Código de estado 400 si el correo electrónico ya está registrado.

### 3. Actualizar datos de un usuario
  - **Endpoint:** `/usuarios/:email`
  - **Método:** `PUT`
  - **Descripción:** Actualiza los datos de un usuario existente.
  - **Parámetros de Ruta:** `email` (Correo electrónico del usuario)
  - **Datos del Cuerpo:** Objeto JSON con los campos a actualizar (nombre, password).
  - **Respuesta Exitosa:** Código de estado 200 y mensaje de éxito en formato JSON.
  - **Respuesta Fallida:** Código de estado 404 si el usuario no se encuentra, código de estado 403 si no tiene permisos para actualizar.

### 4. Eliminar un usuario
  - **Endpoint:** `/usuarios/:email`
  - **Método:** `DELETE`
  - **Descripción:** Elimina un usuario por su correo electrónico.
  - **Parámetros del Cuerpo:** Objeto JSON con el correo electrónico del usuario a eliminar.
  - **Respuesta Exitosa:** Código de estado 200 y mensaje de éxito en formato JSON.
  - **Respuesta Fallida:** Código de estado 404 si el usuario no se encuentra, código de estado 403 si no tiene permisos para eliminar.

## Detalles Endpoints de Plantas

### 1. Obtener todas las plantas
  - **Endpoint:** `/plantas`
  - **Método:** `GET`
  - **Descripción:** Obtiene todas las plantas registradas.
  - **Respuesta Exitosa:** Código de estado 200 y lista de plantas en formato JSON.

### 2. Obtener una planta por especie
  - **Endpoint:** `/plantas/:species`
  - **Método:** `GET`
  - **Descripción:** Obtiene una planta específica por su especie.
  - **Parámetros de Ruta:** `species` (Especie de la planta)
  - **Respuesta Exitosa:** Código de estado 200 y datos de la planta en formato JSON.
  - **Respuesta Fallida:** Código de estado 404 si la planta no se encuentra.

### 3. Registrar una nueva planta
  - **Endpoint:** `/plantas`
  - **Método:** `POST`
  - **Descripción:** Registra una nueva planta.
  - **Datos del Cuerpo:** Objeto JSON con información de la planta (species, name, description, etc.).
  - **Respuesta Exitosa:** Código de estado 200 y datos de la planta registrada en formato JSON.
  - **Respuesta Fallida:** Código de estado 400 si la especie ya está registrada.

### 4. Actualizar datos de una planta
  - **Endpoint:** `/plantas/:species`
  - **Método:** `PUT`
  - **Descripción:** Actualiza los datos de una planta existente.
  - **Parámetros de Ruta:** `species` (Especie de la planta)
  - **Datos del Cuerpo:** Objeto JSON con los campos

 a actualizar (name, description, etc.).
  - **Respuesta Exitosa:** Código de estado 200 y mensaje de éxito en formato JSON.
  - **Respuesta Fallida:** Código de estado 404 si la planta no se encuentra, código de estado 403 si no tiene permisos para actualizar.

### 5. Eliminar una planta
  - **Endpoint:** `/plantas/:species`
  - **Método:** `DELETE`
  - **Descripción:** Elimina una planta por su especie.
  - **Parámetros del Cuerpo:** Objeto JSON con el especie de la planta a eliminar.
  - **Respuesta Exitosa:** Código de estado 200 y mensaje de éxito en formato JSON.
  - **Respuesta Fallida:** Código de estado 404 si la planta no se encuentra, código de estado 403 si no tiene permisos para eliminar.


## Posibles vulnerabilidades de seguridad

### 1. Falta de Validación de Datos
El código no valida adecuadamente los datos de entrada. Por ejemplo, en las rutas de ``POST`` y ``PUT`` para usuarios y plantas, no hay validación de los datos recibidos. Es importante validar que los datos sean del tipo correcto y que cumplan con los requisitos esperados (longitud de la contraseña, formato del correo electrónico, etc.).

### 2. Exposición de Datos Sensibles
La información sensible, como las contraseñas de los usuarios, se almacena en texto plano en el servidor. Esto es extremadamente inseguro. Se debe almacenar solo hashes seguros y únicos de las contraseñas, utilizando algoritmos como bcrypt.

### 3. Autenticación y Autorización Inadecuadas
No hay un sistema adecuado de autenticación y autorización implementado en este código. Deberías considerar implementar un sistema de autenticación basado en tokens (como JWT) para asegurar las rutas y verificar las solicitudes de manera adecuada.