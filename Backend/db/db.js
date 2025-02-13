const mongoose = require('mongoose');

function toConnectDB() {
    mongoose.connect(process.env.DB_CONNECT).then( () => {
        console.log('Connected to DB');
    });
}

module.exports = toConnectDB;