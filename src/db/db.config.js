const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect('')
        console.log('Connection to Database is successfuly');
    } catch (error) {
        console.error(error)
    }

}