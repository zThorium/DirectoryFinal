# 🚀 Proyecto: API Unificada para Bases de Datos

Este proyecto presenta una API unificada diseñada para simplificar la interacción con bases de datos SQL y NoSQL. Proporciona un modelo de cliente coherente y una interfaz de programación unificada para facilitar las operaciones de datos.

## Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes elementos:

- [Node.js](https://nodejs.org/): Entorno de ejecución para JavaScript.
- [XAMPP](https://www.apachefriends.org/index.html): Necesario para MySQL en un entorno de desarrollo local.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): Utilizado para alojar la base de datos NoSQL en la nube.

## Instalación de Dependencias

Este proyecto requiere las siguientes dependencias clave:

- `express`: Para la creación del servidor web y manejo de rutas.
- `sequelize`: ORM para interactuar con MySQL.
- `mongoose`: ODM para interactuar con MongoDB.
- `dotenv`: Para gestionar variables de entorno.
- `cors`: Para habilitar CORS.
- `morgan`: Para el registro de solicitudes HTTP.
- `mysql2`: Cliente MySQL para Node.js.
- `nodemon`: Para reiniciar automáticamente el servidor durante el desarrollo.

## Estructura del Proyecto

La estructura del proyecto se organiza de la siguiente manera:

- **Modelos**: Incluye dos modelos `Usuario`, uno para Sequelize (SQL) y otro para Mongoose (NoSQL).
- **Controladores**: Controladores encargados de administrar cada parte del codigo.
- **Rutas**: Un enrutador único que utiliza dos middlewares correspondientes a los controladores SQL y NoSQL. El enrutador dirige las solicitudes al controlador apropiado según el último parámetro de la URL (`sql` o `nosql`).

## Configuración

Para configurar el entorno de desarrollo:

1. Instala y configura XAMPP para MySQL.
2. Configura tu clúster en MongoDB Atlas y obtén la cadena de conexión.
3. Crea un archivo `.env` en la raíz del proyecto con las credenciales de las bases de datos.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install

