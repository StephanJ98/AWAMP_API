# Aplicación Web de Ayuda para el Mantenimiento de Plantas - AWAMP-API

> ## URL de la API [AWAMP](https://awamp-api.vercel.app)

## Rutas disponibles

- `/` Ruta principal unicamente muestra el mensage `Todo parece correcto`.

- Rutas de `Usuario`:
    - GET `/user/get/:email`: Devuelve los datos del usuario cuyo `email` concuerda con el de la URL.
    - POST `/user/create`: Crea un usuario en la DB y lo devuelve. (A partir de los datos del body)
    - DELETE `/user/delete/:email`: Elimina el usuario cuyo `email` concuerda con el de la URL.
    - PATCH `/user/update/:email`: ```//ToDo```

- Rutas de `Planta`:
    - POST `/plants/create`: Crea una planta en la DB y ladevuelve. (A partir de los datos del body)
    - GET `/plants/all`: Devuelve los datos de todas las plantas.
    - GET `/plants/:id`: Devuelve los datos de la planta cuyo `id` concuerda con el de la URL.
    - PATCH `/plants/update/:id`: Actualiza la planta cuyo `id` concuerda con el de la URL. (A partir de los datos del body)
    - DELETE `/plants/delete/:id`: Elimina la planta cuyo `id` concuerda con el de la URL.

---

### Stack Técnica

- Express.js
- Prisma
- MongoDB