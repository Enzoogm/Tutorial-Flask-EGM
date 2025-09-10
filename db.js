// db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Corrige la carga de variables

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // corregido
    queueLimit: 0
});

export default pool;
