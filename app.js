const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errroController = require('./controllers/error');


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(errroController.get404);

app.listen(3000);
