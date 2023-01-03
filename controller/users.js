const {modelUser} = require("../models");


const getUsers = async (req, res) =>{
    try{
        // const { query:{range} } = req; 
        const users = await modelUser.find({}); 
        res.status(201).send(users); 
    }catch(e){
        res.status(404).send({error: e})
    }
}

const getUser = async (req, res) =>{
    try{
        const { params: { id } } = req; 

        const users = await modelUser.findOne({_id: id}); 
        res.json(users); 
    }catch(e){
        res.status(404).send({error: e})
    }
}

const createUser = async (req, res) =>{
    try{
        const { body } = req; 
        const user = await modelUser.create(body); 
        res.json({data: user}); 

    }catch(e){
        res.status(404).send({error: e})
    }
}

const updateUser = async (req, res) =>{
    try{
        // const { body } = req;
        const { body: {id, ...data} } = req; 

        // console.log(id);
        // console.log(data); 

        const user = await modelUser.findByIdAndUpdate({_id:id} ,data, {
            returnOriginal: false,
        }); 

        res.json({data: user}); 

    }catch(e){
        res.status(404).send({error: e})
    }
}


const deleteUser = async (req, res) => {
    try{
        // const { body } = req;
        const id = req.params.id;

        console.log(id); 

        const userDelete = await modelUser.findById(id)
        await modelUser.deleteOne({_id: id}); 
        res.json(userDelete); 

    }catch(e){
        res.status(404).send(e)
    }
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
}