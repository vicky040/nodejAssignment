const User = require('../models/user');
const {sign} = require('../utils/jwt');
const bcrypt = require('bcrypt'); 



const registerUser = async (req, res, next) => {
  try {
    let user = req.body;
    const userExist = await User.findOne({
      $or: [
        { email: user.email },
        { mobile: user.mobile }
      ]
    });
    if (userExist) {
     res.status(400).json({message:"Email and mobile already exist"})
    }

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    user.role = 2;
    user = await User.create(user);

    const userData = user.toJSON();
    const omitData = ['password'];
    omitData.forEach(data => delete userData[data]);

    const accessToken = sign(userData);

    return res.status(200).json({
      data: userData,
      error: false,
      accessToken,
      message: "User registered successfully",
    });
  } catch (err) {
    next(err);
  }
};



const loginUser = async(req,res,next)=> {

  try{

   let {email , password} = req.body ; 
   const userExist = await User.findOne({email})
    
   if (!userExist) {
    res.status(400).json({message:"Invalid Credentials"})
   }

   const comparepassword =  bcrypt.compare(userExist.password , password) ; 
   
   if(!comparepassword){
     res.status(400).json({message:"Invalid Credentials"})
   }
   
   const userData = userExist.toJSON();
   const omitData = ['password'];
   omitData.forEach(data => delete userData[data]);

   const accessToken = sign(userData);

   return res.status(200).json({
     data: userData,
     error: false,
     accessToken,
     message: "LoginUser successfully",
   });
} catch(err){
     next(err)
  }
}
















module.exports = {registerUser , loginUser };