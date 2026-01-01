import express from "express";
import UserSchema from "../model/SchemaUser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {config} from "../Config/config.js";
import verifyToken from "../middleware/verifyUser.js";
const route = express.Router();

route.post ("/register",async (req, res) => {
    try {
        const {username,email,password} = req.body;

        let User = await UserSchema.findOne({email});
        if(User) {
            return res.status(400).send({
                message: "User already exists"
            })
        }

        if(username.length < 5){
            return res.status(400).send({
                message:"Username must be at least 5 characters",
            })
        }

        if(email.length < 8 || !email.includes("@")){
            return res.status(400).send({
                message:"Email Must be at least 8 characters with @ included",
            })
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            return res.status(400).send({
                message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
            });
        }

        //Create A User
        const createUser = new UserSchema({
            username,
            email,
            password,
        })

        //Secure password by Salt method
        const PswSalt = await bcrypt.genSalt(10);
        createUser.password = await bcrypt.hash(password, PswSalt);

        //Save user in your database
        await createUser.save();

        //generate JWT
        const payload = {
            user:{ id : createUser.id},
        }

        //JWT Authentication
        jwt.sign(payload,config.secret, {expiresIn: "1d"},(err,token)=>{
            if(err){
                return res.status(400).send({
                    errors:err.array()
                })
            }else{
                return res.status(200).send({
                    token:token,
                    message:"User Registered Successfully"
                })
            }
        });
    }catch(err) {
        res.status(500).send({
            status: 500,
            message: "Internal Server Error",
        })
    }
});

route.post("/login",async (req, res) => {
    try {
        const {email, password} = req.body;

        //Check user Exist yout db or not
        let User = await UserSchema.findOne({email});
        if (!User) {
            return res.status(400).send({
                message: "User Not Found"
            })
        }

        //Check Email
        if (email !== User.email || email.length < 8) {
            return res.status(400).send({
                message: "Invalid Email Address"
            })
        }

        //Compare Password with Register Password
        const PswCompare = await bcrypt.compare(password, User.password);
        if (!PswCompare) {
            return res.status(400).send({
                message: "Password does not match"
            })
        }

        //Data id in Payload
        const payload = {
            user: {
                id: User.id
            }
        }

        jwt.sign(payload, config.secret, {expiresIn: 8000}, (err, token) => {
            if (err) {
                return res.status(400).send({
                    errors: err.array()
                })
            } else {
                return res.status(200).send({
                    token: token,
                    message: "User Logged In Successfully"
                })
            }
        })
    } catch (err) {
        return res.status(500).send({
            error: "Internal Server Error"
        })
    }
});

route.get("/userVerify",verifyToken, async (req,res)=>{
    try{
        const userId = req.user.id;
        const user = await UserSchema.findById(userId).select("-password");
        if(!user){
            return res.status(400).send({
                message: "User Not Found"
            })
        }
        res.status(200).send({
            message:"Welcome To Home",
        })
    }catch(err){
        res.status(500).send({
            status: 500,
            message: "Internal Server Error \n" + err ,
        })
    }
})

export default route;