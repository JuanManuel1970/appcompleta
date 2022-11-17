const express = require (`express`);
const app = express();
const mysql = require (`mysql2`);
const hbs = require (`hbs`);//motor de plantilla
const path = require (`path`);//enrutador de archivos
const nodemailer = require (`nodemailer`);//enviar mails
require(`dotenv`).config();//variables de entorno

//configurmos el puerto
const PORT = process.env.PORT || 9000;


//Midelwers Funciones que configuran el backend
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,`public`)));

//Configuramos el motor de plantillas de HBS 

app.set(`view engine`,`hbs`);
//configuramos la ubicacion de las plantillas 
app.set(`views`, path.join(__dirname,`views`));
//configuramos los parciales de los motores de plantillas
hbs.registerPartials(path.join(__dirname,`views/partials`)); 

//crear base de datoy y despues se comenta



//conexion a la base de datos
const conexion = mysql.createConnection({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DATABASE,
port:process.env.DBPORT
});

conexion.connect((err) =>{
    if(err) throw err;
    console.log(`Conectado a la Database ${process.env.DATABASE}`);
})





//rutas de la aplicacion
app.get(`/`, (req, res)=> {
    res.send(`bienvenido a la app completa`)

})


//Servidor a la escucha de las peticiones
app.listen(PORT,()=>{
    console.log(`servidor trabajando en el puerto : ${PORT}`);
})



