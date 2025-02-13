const userModel = require('../models/user.models');

module.exports.registerUser = async (req, res, next) => {
    try {
        const user = new userModel(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {   
        res.status(400