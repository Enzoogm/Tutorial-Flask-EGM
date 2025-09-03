import express from 'express'

const app = express()
const PORT = 5000; //Nunca va a cambiar al ser decladrado con MAYUS
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Este es un endpoint hecho con express');
})

//Endpoint con parametros
app.get('/api/user/:id', (req, res)=>{
    const {id} = req.params
    res.send({message: `El usuario con id ${id} es pepito`})
})

// query params
app.get('/api/search', (req, res)=>{
    const {name, lastname} = req.query 
    res.json({
        firstName : name,
        lastname,
    });
//http://localhost:5000/api/search?name=Federico&lastname=Villace
});

//Registrar usuario
app.get('/api/user', (req, res)=>{ 
    const {name, email} = req.body
    res.json({message: 'Usuario creado', data : {name,email}});
})

//Iniciar el servidor 
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
