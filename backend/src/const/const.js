import 'dotenv/config.js';

/* These lines of code are assigning values to constants using the values of environment variables. The
`process.env` object in Node.js provides access to environment variables. */
const SECRET = process.env.SECRET;
const RUN_PORT = process.env.RUN_PORT;
const NODE_ENV = process.env.NODE_ENV;
const STATIC_PATH = process.env.STATIC_PATH;
const URI_MONGO = process.env.URI_MONGO;

// BD
const HOST = process.env.HOST;
const USER = process.env.USER;
const DATABASE = process.env.DATABASE;

/* The code is creating an object called `object` and assigning it the values of the constants
`SECRET`, `NODE_ENV`, `RUN_PORT`, and `STATIC_PATH`. These constants are obtained from environment
variables using `process.env`. */
const object = {
    HOST,
    USER,
    SECRET,
    NODE_ENV,
    DATABASE,
    RUN_PORT,
    URI_MONGO,
    STATIC_PATH,
}

Object.freeze(object) //The Object.freeze() static method freezes an object

export default object;