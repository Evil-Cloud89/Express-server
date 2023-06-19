const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './views/layouts', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about',  { layout: 'dark' });
});

app.use('/user/', (req, res) => {
  res.render('forbidden', { layout: 'dark' });
});

app.use((req, res) => {
  res.status(404).render('404');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});