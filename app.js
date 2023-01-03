const cors = require("cors");
const express = require("express"); 
const morgan = require("morgan");
const server = express(); 
// const HookContent = require("./hook/contentRangeHook");


server.use(cors()); // manejo de error de origen crusado 
server.use(morgan("tiny")); // historial de peticiones 
server.use(express.json()); //manejo de info en json
server.use(require("./hook/contentRangeHook")); 
server.use("/api/users", require("./routers/users")); //uso de rutas 


module.exports = server; 
