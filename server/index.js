const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userController = require('./controllers/user');
const homeController = require('./controllers/home');
const creationController = require('./controllers/creation');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // Definissez ejs comme 'view engine'
app.set('view engine', 'ejs');

// le chemin par defaut des fichiers de template est 'views'. si vous souhaitez le changer :
console.log('__dirname :', __dirname);
app.set('views', path.join(__dirname, '/views'));
//app.set('views', path.join(__dirname, '/yourViewDirectory'));

// Pour la route ci-dessous ('/'), utilisez 'res.render' pour charger le template ejs désiré :
// index page

app.use(express.static('client/build/'));

app.get('about', (req, res) =>{
  res.render('pages/about');
});

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));

// app.get('/user/:id', userController);

//
// app.get('/creation', creationController.get);
//
// app.post('/creation', creationController.post);

app.listen(8080, (err) => {
  if(err) {
    throw(err);
  }

  console.log('server is running on http://localhost:8080');

});
