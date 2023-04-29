const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Connection to Database is successfuly');
    } catch (error) {
        console.error(error)
    }

}

module.exports = dbConnection;