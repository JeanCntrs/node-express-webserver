const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000; // Puerto env para heroku || 3000 para local
 
app.use(express.static(__dirname + '/public')); // Middleware

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs'); // Express HBS engine
 
app.get('/', (req, res) => {
  res.render('home', {
      name: 'hello world ohhh!',
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
  })
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})