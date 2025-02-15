const mongoose= require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please add the user name"],
    },
    password:{
        type:String,
        required:[true, "Please add the user password"],
    },
    full_name:{
        type:String,
        required:[true, "Please add the user full name"],
    },
    gender:{
        type:String,
        required:[true, "Please add the gender"],
    },
    date_of_birth:{
        type:String,
        required:[true, "Please add the date of birth"],
    },
    country:{
        type:String,
        required:[true, "Please add the country"],
    },
    email:{
        type:String,
        required:[true, "Please add the user email address"],
        unique:[true, "Email address already taken"],
    },
       
}, {
      timestamps:true,
   }
);

module.exports= mongoose.model("User",userSchema);