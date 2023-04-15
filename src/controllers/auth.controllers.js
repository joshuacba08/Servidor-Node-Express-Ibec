const User = require('../models/User.model');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {   
    try {
        console.log(req.body)

        // encriptar contraseña
        const salt = bcrypt.genSaltSync();
        req.body.password = bcrypt.hashSync(req.body.password, salt);

        const newUser = await User.create(req.body);

        return res.status(200).json({
            ok:true,
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            error
        })
    }
} 

const login = (req, res) => {
    return
}

module.exports = {
    createUser,
    login,
}