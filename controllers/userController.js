const asyncHandler= require("express-async-handler");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const User=require("../models/userModel");



//@desc Register a user
//@route POST /user/register
//@access public
const registerUser=asyncHandler(async(req,res)=>{
    const {username,password, full_name,gender,date_of_birth,country,email}=req.body;
    if(!username  || !password || !full_name || !gender || !date_of_birth || !country || !email)
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }  
    
    const userAvailable=await User.findOne({email});  //checking user is already registered or not by email
    if(userAvailable) 
    {
        res.status(400);
        throw new Error("User already registered");
    }
    

    //hash password
    const hashedPassword= await bcrypt.hash(password,10); //10 is salt round

    // creating user
    const user=await User.create({
        username,
        password:hashedPassword,
        full_name,
        gender,
        date_of_birth,
        country,
        email

    });

    
    if(user){ // if user is successfully created
        res.status(201).json({
            message:"User registered successfully",
            _id: user._id,
            username:user.username,
            full_name:user.full_name,
            gender:user.gender,
            date_of_birth:user.date_of_birth,
            country:user.country,
            email:user.email
});
    }
    else 
    {
        res.status(400);
        throw new Error("User data is not valid");
    }
});




//@desc Login user
//@route POST /user/login
//@access public
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    } 

    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password, user.password))){ 
        const accessToken= jwt.sign({
            user:{ 
                username:user.username,
                email: user.email,
                _id: user._id,
            },
        }, process.env.ACCESS_TOKEN_SECRET,
        { expiresIn:"10m"});
        res.status(200).json({message:"Login sucessful" ,accessToken}); 
    }else{
        res.status(401)
        throw new Error("Email or password is not valid");

    }
});



//@desc Search user
//@route GET /user/search
//@access private
const searchUser = asyncHandler(async (req, res) => {
    
        const query = req.query.username || req.query.email; // Search by username or email
        const user = await User.findOne({ 
            $or: [{ username: query }, { email: query }]
        }).select("-password"); // Exclude password field

        if (!user)
        { 
            res.status(404);
            throw new Error("User not found.");
        }   
        res.status(200).json(user);
});


module.exports={registerUser,loginUser,searchUser};


