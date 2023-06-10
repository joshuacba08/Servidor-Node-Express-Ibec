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

const login = async (req, res) => {
    try {
        // primero consultaremos si el usuario existe a través de su email
        const userInDb = await User.findOne({email: req.body.email}); // si no existe, entonces userInDb será null
        if(!userInDb) return res.status(404).json({
            ok:false,
            error: 'Usuario no encontrado'
        });

        // si el usuario existe, entonces comparamos la contraseña ingresada con la que tenemos en la base de datos
        const validPassword = bcrypt.compareSync(req.body.password, userInDb.password);
        if(!validPassword) return res.status(400).json({
            ok:false,
            error: 'Contraseña incorrecta'
        });

        // elimino la contraseña del objeto que voy a retornar
        const {password, ...user} = userInDb._doc;

        // si todo sale bien, entonces retorno el usuario con ok:true
        return res.status(200).json({
            ok:true,
            data: user,
        });

    } catch (error) {
        return res.status(500).json({
            ok:false,
            error
        });
    }
}

module.exports = {
    createUser,
    login,
}