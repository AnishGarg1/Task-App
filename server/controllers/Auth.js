const User = require("../models/User");

exports.signup = async (req, res) => {
    try {
        const {firstName, lastName, userName, email, password} = req.body;
    
        const user = User.create({
            firstName,
            lastName,
            userName,
            email,
            password,
        });

        const alreadyUser = User.find({
            email: email
        });

        if(alreadyUser){
            return res.status(401).json({
                success: false,
                message: "User already exist",
            })
        }

        if(!firstName || !lastName || !userName || !email || !password){
            return res.status(404).json({
                success: false,
                message: "Please fill all details, Try again",
            })
        }
    
        return res.status(200).json({
            success: true,
            message: "User Created Successfully",
            data: user,
        });       
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error, Try again.",
            error: error.message,
        });
    }
}