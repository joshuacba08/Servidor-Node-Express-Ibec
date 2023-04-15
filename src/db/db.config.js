const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect('mongodb+srv://joroya:XtLUiLtiFAZRFVHZ@cluster0.wrv8e6j.mongodb.net/test');
        console.log('Connection to Database is successfuly');
    } catch (error) {
        console.error(error)
    }

}

module.exports = dbConnection;