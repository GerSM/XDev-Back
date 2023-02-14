const db = require('../utils/database');
const Users = require('../models/users.model');

const users = [
    {
        firstname: 'Germán ',
        lastname: 'Silva',
        email: 'ger@hotmail.com',
        profileimage: 'https://picsum.photos/200/300',
        password: '123456'
    },
    { 
        firstname: 'Moises', 
        lastname: 'Silva', 
        email: 'msm@email.com', 
        password: '123456', 
    },
    { 
        firstname: 'Diego', 
        lastname: 'Silva', 
        profileimage: 'https://picsum.photos/200/300',
        email: 'dsm@email.com', 
        password: '123456', 
    }
];

db.sync({force: false})
    .then(() => {
        console.log('sync')
        users.forEach( async ( users ) => await Users.create(users));
    });