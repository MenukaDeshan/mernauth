const User = require('../models/user');
const jwt = require('jsonwebtoken');

const test = (req,res) => {
    res.json('test is working')
}

//register user
const registerUser =  async (req,res)=>{
    try{
        const{name, email, password} = req.body;
        //check if name was entered
        if(!name){
            return res.json({
                error:'name is required'
            })
        };
         //check if password was entered
         if(!password || password.length < 6){
            return res.json({
                error:'password need 6'
            })
        };
         //check if email was entered
         const exist = await User.findOne({email});
         if(exist){
            return res.json({
                error:'email is taken'
            })
        }
        //create user in database
        const user = await User.create({
            name, 
            email, 
            password
        });

        return res.json(user)
    }catch (error){
        console.log(error)
    }
};

//login
const loginUser =  async (req,res)=>{
    try{
        const{email, password} = req.body;
         //check if user exits
         const user = await User.findOne({email});
         if(!user){
            return res.json({
                error:'no user found'
            })
        };
        // Validate the password
        if (user.password !== password) {
            return res.json({
              error: 'Invalid password',
            });
          }else{
            jwt.sign(
                { email: user.email, id: user._id, name: user.name },
                process.env.JWT_SECRET,
                {},
                (err, token) => {
                    if (err) throw err;
                    res.cookie('token', token, { httpOnly: true }).json(user);
                });
          }
    }catch (error){
        console.log(error)
    }
};

const getProfile = (req,res) => {
    const{token} = req.cookies
    if(token){
        jwt.verify(token,process.env.JWT_SECRET, {}, (err, user)=> {
            if(err) throw err;
            res.json(user)
        })
    }else{
        res.json(null)
    }
}

module.exports ={
    test,
    registerUser,
    loginUser,
    getProfile
}