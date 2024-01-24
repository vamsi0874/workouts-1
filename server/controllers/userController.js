const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// login a user
const loginUser = async (req, res) => {
  const { email,password } = req.body
  try{
   
    const user =await User.login(email,password)
    
    //create token
    const token = createToken(user._id)
    res.status(200).json({email,token})
   }
   catch(error){
    res.status(400).json({error:error.message})
   }
  
 
}
// ceate token
const createToken = (_id)=> {
  return  jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
 
}

// signup a user
const signupUser = async (req, res) => {
   const {email,password} = req.body
   
   try{
   
    const user =await User.signupUser(email,password)
    const token = createToken(user._id)
    res.status(200).json({email,token})
   }
   catch(error){
    res.status(400).json({error:error.message})
   }
}

module.exports = { signupUser, loginUser }