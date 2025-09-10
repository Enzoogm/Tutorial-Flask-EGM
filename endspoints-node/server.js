// app.js
import express from 'express';
import pool from './db.js'; // Asegurate que db.js esté en la misma carpeta

const app = express();
const PORT = 5000;

app.use(express.json());


// Endpoint principal
app.get('/', (req, res) => {
    res.send('Este es un endpoint hecho con Express');
});

// Endpoint con parámetro
app.get('/api/user/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `El usuario con id ${id} es pepito` });
});

// Query params
app.get('/api/search', (req, res) => {
    const { name, lastname } = req.query;
    res.json({ firstName: name, lastname });
    // Ejemplo: http://localhost:5000/api/search?name=Federico&lastname=Villace
});

// Registrar usuario (POST es más correcto que GET para crear)
app.post('/api/user', (req, res) => {
    const { name, email } = req.body;
    res.json({ message: 'Usuario creado', data: { name, email } });
});

// DELETE
app.delete('/api/user/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Usuario con id ${id} fue eliminado` });
});

// GET desde DB
app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM Productos");
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la consulta' });
    }
});

// PUT
app.put('/api/user/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    res.json({
        message: `Este es el usuario con id ${id}`,
        data: { name, email }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
