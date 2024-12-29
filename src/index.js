//-------------------------Requiring Express--------------------
const express = require("express");
const app = express();
const port = 8080;
//--------------------------Requiring Path----------------------
const path = require("path");
//--------------------------Requiring bcrypt--------------------
const bcrypt = require("bcrypt");
//--------------------------EJS Setup-------------------------------
app.set("view engine","ejs");
//app.set("views",path.join(__dirname,"views"))
app.use(express.static("public"));
//-----------------------------Requiring Module-----------------------
const userLogin = require("./config")
//------------------------------Data Parse-----------------------
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.listen(port,()=>{
    console.log(`App is listenning on Port ${port}.....`);
})

//----------------------------------User Login-----------------------------------------------
app.get("/",(req,res)=>{
    res.render("login")
})

app.post("/login",async (req,res)=>{
    let {username, password} = req.body;
    let userDetail = await userLogin.findOne({username : username});
    if(!userDetail){
        res.send("Username does not exist please signup before login")
    }
    else{
        //compare the password
        const isPasswordMatch = await bcrypt.compare(password, userDetail.password)
        if(isPasswordMatch){    
            res.render("home.ejs")
        }
        else{
            res.send("Password does not match")
        }      
    }
})

//----------------------------------User Signup-------------------------------------------
app.get("/signup",(req,res)=>{
    res.render("signup.ejs")
})

app.post("/signup",async (req,res)=>{
    let {fname, lname, email, username, password} = req.body;
    //------Check if user exist by email and username
    let userAlreadyExist = await userLogin.findOne({$or : [{email : email},{username : username}]});
    if(userAlreadyExist){
        res.send("Username Or Email Already Exist")
    }else{
        //Hash the password using bcrypt
        const saltRounds = 10; // Number of saltround for bcrypt
        const hashedPassword = await bcrypt.hash(req.body.password,saltRounds)
        password = hashedPassword; //Replace the Hash password with the Original Password

        let user = new userLogin ({
            fname : fname,
            lname : lname,
            email: email,
            username : username,
            password : password
        })

        user.save().then(()=>{console.log("User Saved Successfully....");})
        res.render("login")
    }
})




