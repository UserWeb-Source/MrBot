import jwt from 'jsonwebtoken';
import {config} from "../Config/config.js";

const verifyToken = (req,res,next) => {
    //Get Authorization header
    const authHeader = req.headers.authorization;

    //Check if header empty or not start with Bearer than run it
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(401).send({
            message: 'No token provided',
        });
    }

    //Toke split with space --> Bearer <token>
    const token = authHeader.split(' ')[1];

    try{
        //Verify Token Using Secret Key
        const decoded = jwt.verify(token,config.secret);
        req.user = decoded.user;
        next();
    }catch(err){
        res.status(401).send({
            message: 'Invalid token',
        })
    }
}

export default verifyToken;