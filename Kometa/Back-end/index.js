const express = require('express')
const app = express()
const cors = require('cors');
const db = require('./src/config/db');
const session = require('express-session');


// Habilitar CORS para todas las solicitudes
app.use(cors());

const PORT = process.env.PORT || 3000
const homeRoutes = require('./src/routes/homeRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const user = {id:1, username:"inesroda", password:"123"};

app.use(
  session({
    secret: "secreto",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
  })
)

app.use('/', homeRoutes);


app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM orders');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})