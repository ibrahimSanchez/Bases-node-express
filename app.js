require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// servir contenido estatico 
app.use(express.static('public/react'));

// ----------------------
// --- Para las views ---
// ----------------------
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Ibrahim Márquez',
        title: 'Curso de node'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Ibrahim Márquez',
        title: 'Curso de node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Ibrahim Márquez',
        title: 'Curso de node'
    })
});



// ----------------------------
// --- Para la app de react ---
// ----------------------------
// app.get('/', (req, res) => {
//     res.sendFile(__filename + '/public/react/index.html')
// })


app.get('*', (req, res) => {
    res.send('sorry :( not-found')
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
