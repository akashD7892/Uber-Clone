const userModel = require('../models/user.models');

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {

    if( !firstname || !email || !password ){
        throw new Error('All fields are required');
    } 

    
}