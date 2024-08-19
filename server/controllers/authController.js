const User = require('../models/user')

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
        const user = await User.create({
            name, email, password
        })

        return res.json(user)
    }catch (error){
        console.log(error)
    }
}

module.exports ={
    test,
    registerUser
}