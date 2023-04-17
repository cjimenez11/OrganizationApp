const express = require('express');
const { UserModel } = require('../models/UserModel');
const {NoteModel} = require('../models/NoteModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send("all users");
});

userRouter.post("/register", async(req, res) => {
    const {name,email,password} = req.body;
    bcrypt.hash(password, 5, async function(err, hash){
        if (err) {
           return res.send({message: 'something went wrong',status:0});
        }
        try{
            let newUser = new UserModel({
                name,
                email,
                password: hash
            });
            await newUser.save();
            res.send({message: 'user created',status:1});
    } catch(error){
        res.send({message:error.message,status:0});
    };
    });
});

userRouter.post("/login", async(req, res) => {
    const {email,password} = req.body;
    let option = {
        expiresIn: '3m'
    }

    try{
        let data = await UserModel.find({email});
        if(data.length>0){
            let token = jwt.sign({userId:data[0]._id},"secret",option)
            bcrypt.compare(password, data[0].password, function(err, result) {
                if(err) return res.send({message: 'Something went wrong'+err,status:0});
                if(true){
                    res.send({
                        message: 'User logged in successfully',
                        token:token,
                        status:1
                    })
                }else{
                    res.send({
                        message: 'Incorrect credentials',
                        status:0
                    })
                }

            });
        }else{
            res.send({
                message: 'User not found',
                status:0
            })
        }
    } catch(error){
        res.send({message:error.message,status:0});
    }
});
       

module.exports = {userRouter};