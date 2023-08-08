# Aplicación Web de Ayuda para el Mantenimiento de Plantas - AWAMP-API

> ## URL de la API [AWAMP](https://awamp-api.vercel.app)

## Rutas disponibles

- `/` Ruta principal unicamente muestra el mensage `Todo parece correcto`.

- Rutas de `Usuario`:
    - GET `/user/get/:email`: Devuelve los datos del usuario cuyo `email` concuerda con el de la URL.
    - POST `/user/login`: Comprueba si el usuario que intenta loguearse es valido. (A partir de los datos del body)
        > - `email`
        > - `password`
    - POST `/user/register`: Crea un usuario en la DB. (A partir de los datos del body)
        > - `email`
        > - `password`
    - DELETE `/user/delete/:email`: Elimina el usuario cuyo `email` concuerda con el de la URL.

- Rutas de `Planta`:
    - POST `/plants/create`: Crea una planta en la DB y la devuelve. (A partir de los datos del body)
        > - ``name``
        > - ``species``
        > - ``description``
        > - ``soil`` 
        > - ``temperature`` 
        > - ``sun`` 
        > - ``water`` 
        > - ``multiplication`` 
        > - ``image_url`` 
        > - ``email``
    - GET `/plants/all`: Devuelve los datos de todas las plantas.
    - GET `/plants/:id`: Devuelve los datos de la planta cuyo `id` concuerda con el de la URL.
    - DELETE `/plants/delete/:id`: Elimina la planta cuyo `id` concuerda con el de la URL.

---

### Stack Técnica

- Express.js
- Prisma
- MongoDB