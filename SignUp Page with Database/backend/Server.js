const express= require("express");
const mongoose= require("mongoose");
const app= express();
const cors= require("cors");
const port= 3000;
const bodyParser= require("body-parser");

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://ayushgoyal:3GBc3BTTixTptkAW@cluster0.1wksm.mongodb.net/signup");
const UserSchema= new mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String
})
const User= mongoose.model('User', UserSchema);


app.post("/auth/register", async(req, res)=>{
    const firstname= req.body.firstname;
    const lastname= req.body.lastname;
    const password= req.body.password;

    if(!firstname|| !lastname|| !password){
        res.status(400).json({
            msg: "Please fill the form"
        })
        return;
    }


    try{
        const existUser= await User.findOne({
            firstname,
            lastname
        });

        if(existUser){
            res.status(400).json({
                msg: "User already exists"
            })
            return;
        }
        const response= await User.create({
            firstname,
            lastname,
            password
        })
        if(response){
            res.status(200).json({
                msg: "Registered successfully"
            })
        }else{
            res.status(404).json({
                msg: "there is a problem "
            })
        }
  
    }catch(err){
        res.status(500).json({
            msg: "Internal server error"
        })
    }




})

app.listen(port, ()=>{
    console.log(`the server is listening on ${port}`);
})