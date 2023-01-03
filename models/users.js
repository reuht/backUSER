const mongoose = require("mongoose"); 

const userScheme = new mongoose.Schema({

    name: {
        type: String, 
        require: true, 
    }, 
    age: {
        type: Number, 
        require: true, 
    }, 
    email: {
        type: String,
        unique: true, 
        require: true,
    }
},{
    timestamps: false,
    versionKey: false
}); 


module.exports = mongoose.model("User",  userScheme); 