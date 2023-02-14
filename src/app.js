const express = require('express');
const db = require('./utils/database')
const userRoutes = require('./routes/users.routes')

const app = express();

app.use(express.json());


db.authenticate()
    .then(() => console.log("Atenthication success"))
    .catch((error) => console.log(error));

db.sync({force: false})
    .then(() => console.log("Db Sync"))
    .catch((error) => console.log(error));

app.get('/', (req, res) => {
    console.log('welcome')
});

app.use('/api/v1', userRoutes);

//app.use(handleError);

module.exports = app;

