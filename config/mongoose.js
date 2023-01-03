const mongoose = require("mongoose"); 
require("dotenv").config(); 



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.6p5r94x.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`

const conn = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
}

mongoose.set('strictQuery', false);

module.exports = conn; 

