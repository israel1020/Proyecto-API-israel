
//Crearemos constantes para requerir de la libreria express
const express = require ('express');
const app = express();
const cors = require('cors')
//app utilizara la librerias de json 
app.use(express.json());
app.use(cors());

//nuestra array
//enroll utilizaremos para ver si estan inscritos enroll: true
const cantantes = [
    {id: 1, 
    name: 'Maluma',
    age: 28 , 
    descripcion:'Juan Luis Londoño Arias, conocido por su nombre artístico Maluma, es un cantante colombiano de pop, reguetón y trap latino. Saltó a la fama en su país natal en 2011, gracias a los sencillos «Farandulera», «Obsesión», y «La temperatura»; y con «Carnaval», en el resto de América Latina',
    img:'https://upload.wikimedia.org/wikipedia/commons/2/2d/Maluma_-_Espa%C3%A7o_das_Am%C3%A9ricas_%2837591053894%29.jpg', 
    enroll:true},

    {id: 2, 
    name: 'Lady Gaga',
    age: 38 ,
    descripcion:'Stefani Joanne Angelina Germanotta, más conocida por su nombre artístico Lady Gaga, es una cantante, compositora, productora, bailarina, actriz, activista y diseñadora de moda estadounidense.',
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/210120-D-WD757-1720_%2850861332387%29_%28cropped%29.jpg/1200px-210120-D-WD757-1720_%2850861332387%29_%28cropped%29.jpg', 
    enroll:false},

    {id: 3, 
    name: 'Jhay Cortes',
    age: 23 ,
    descripcion:'Jesús Manuel Nieves Cortez, conocido artísticamente como Jhay Cortez, es un cantante, compositor y productor discográfico puertorriqueño de reguetón y trap latino.',
    img:'https://resources.tidal.com/images/28d90921/72dc/4a48/96bb/eb9bfa15f94e/750x750.jpg', 
    enroll:false},

    {id: 4, 
    name: 'Anuel',
    age: 34 ,
    descripcion:'Emmanuel Gazmey Santiago, conocido por su nombre artístico Anuel AA o Anuel, es un rapero, compositor y cantante puertorriqueño de reguetón y trap latino. En 2016, fue arrestado y sentenciado a 30 meses de prisión por posesión de armas de fuego.',
    img:'https://www.hola.com/us/images/026c-130a0f6b89f1-566a4f56a028-1000/horizontal-1200/anuel-aa.jpg',
    enroll:false},

    {id: 5,
    name: 'Benito',
    age: 22 ,
    descripcion:'Benito Antonio Martínez Ocasio, mejor conocido por su nombre artístico Bad Bunny, es un rapero y compositor puertorriqueño. Su estilo de música es generalmente definido como trap latino y reguetón, pero también incorporó otros géneros como rock, kizomba y soul.',
    img:'https://media.revistagq.com/photos/5fc0cb787e8773c13e83a61e/3:4/w_2088,h_2784,c_limit/GettyImages-1280266077.jpg', 
    enroll:false},

    {id: 6, 
    name: 'Bustamante',
    age: 25 ,
    descripcion:'David Bustamante Hoyos, ​conocido como David Bustamante o simplemente Bustamante, es un cantautor español de música pop. Sus ventas totales se estiman en más de dos millones de copias.​ Según acreditan los Productores de Música de España cuenta con quince discos de platino y un disco de oro en ventas de álbumes.',
    img:'https://www.lecturas.com/medio/2021/09/27/bustamante-4_1abd984c_800x800.jpg',
    enroll:false}

];

//DECLAREMOS NUESTROS REQUEST 
app.get('/',(req, res)=>{
    res.send('Este es la página principal de la API')
});

app.get('/api/cantantes',(req, res)=>{
    res.send(cantantes);
});

app.get('/api/cantantes/:id', (req, res)=>{
    const cantante = cantantes.find(c => c.id === parseInt(req.params.id));
    if(!cantante) return res.status(404).send('No hay Ningun cantante con ese Numero');
    else res.send(cantante);
})

app.post('/api/cantantes', (req, res)=>{
    const cantante ={
        id: cantantes.length + 1,
        name: req.body.name,
        descripcion: req.body.descripcion,
        img: req.body.img,
        age: parseInt(req.body.age),
        enroll:(req.body.enroll=='true')
    }
     cantantes.push(cantante);
     res.send(cantantes);
    });

app.delete('/api/cantantes/:id', (req, res)=>{
        const cantante = cantantes.find(c => c.id === parseInt(req.params.id));
        if(!cantante) return res.status(404).send('No hay Ningun cantante con ese Numero');

        const index = cantantes.indexOf(cantante);
        cantantes.splice(index, 1);
        res.send(cantante);
    });

const port = process.env.port || 80;

app.listen(port, ()=> console.log("API LEVANTADA"));
