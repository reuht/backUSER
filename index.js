const conn = require("./config/mongoose"); 
const server = require("./app.js")
require("dotenv").config(); 


const PORT = process.env.PORT || 3001


conn().then(response => {
    server.listen(PORT, () => {
        console.log("***Successfully connected***");

        console.log(`http://localhost:${PORT}`);
    });
}, 
error => {
    console.log("***Connection error***");
}); 


