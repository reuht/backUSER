const {modelUser} = require('../models')


// module.exports = async (req, res, next) => {
//     try {
//         const count = await modelUser.count({})

//         res.set({'Access-Control-Expose-Headers':`users 0-${count}/${count}`});
//         res.set("Access-Control-Expose-Headers", "X-Total-count");
//         res.set("X-total-Count", count);

//         next(); 
//     }catch(e){
//         console.err(e); 
//         res.status(500).send({error: e}); 
//     }
// }

module.exports = (req, res, next) => {
    modelUser.count({}, function(err, count){
        if(err){
            console.log(err); 
            res.status(500).send('Error!'); 
        }
        
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.setHeader('Content-Range', `users 0-${count}/${count}`);
        next(); 
    }); 
}

