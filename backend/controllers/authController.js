const { oauth2Client } = require("../utils/googleConfig");
const axios = require("axios");
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();

const googleLogin = async (req, res) => {
    try {
        const {code} = req.query;
        const googleRes = await oauth2Client.getToken(code);
        console.log("Google Response: ", googleRes);
        
        oauth2Client.setCredentials(googleRes.tokens);
        const userRes = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`,

        );
        const {email, name, picture} = userRes.data;
        console.log("User Info: ", userRes.data);
        
        let user = await UserModel.findOne({email});
        if(!user){
            user = await UserModel.create({name, email, picture});
            await user.save();
        }
        const {_id} = user;
        const token = jwt.sign({email,_id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TIMEOUT});
        res.status(200).json({
            message: 'Success',
            token,
            user: {_id, email, name, picture}});
        
    } catch (error) {
        res.status(500).json({message: 'Server Error', error: error.message});
    }
}

module.exports = { googleLogin };