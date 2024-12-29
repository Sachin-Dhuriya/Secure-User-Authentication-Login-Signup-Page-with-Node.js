const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Login")
}

main().then(()=>{console.log("Connection Successfull.....");}).catch(()=>{console.log("Error during establishing connection.....");})

const loginSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
    }
})
 
const UserLogin = new mongoose.model("UserLogin",loginSchema);

module.exports = UserLogin;




