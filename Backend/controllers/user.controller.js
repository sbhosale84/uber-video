const { validationResult } = require('express-validator');
const userService = require('../services/user.service');
const userModel = require('../models/user.model');
const blacklistTokenModel = require('../models/blackListToken.model');

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {

            return res.status(400).json({ errors: errors.array() });
        }

        const { fullName, email, password } = req.body;


        const hashPassword = await userModel.hashPassword(password);


        const user = await userService.createUser({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashPassword,
        });


        const token = user.generateAuthToken();


        return res.status(201).json({ token, user });
    } catch (error) {
        console.error('Error registering user:', error.message);


        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = user.generateAuthToken();
        res.cookie('token', token)

        return res.status(200).json({ token, user });

    } catch (error) {
        console.error('Error registering user:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

}

module.exports.getUserProfile = async (req, res) => {
    try {
        if (!req.user) {
            console.error('No user attached to request');
            return res.status(401).json({ message: "Unauthorized - No user attached" });
        }

        console.log('User profile:', req.user); // Debug log
        return res.status(200).json(req.user);
    } catch (error) {
        console.error('Error in getUserProfile:', error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


// module.exports.logoutUser = async (req, res) => {
//     try {
//         res.clearCookie('token')
//         const token = req.cookie?.token || req.headers.authorization?.split(' ')[1];
//         await blacklistTokenModel.create({ token })
//         return res.status(200).json({ message: "Logged out successfully" });
//     } catch (error) {
//         console.error('Error in logoutUser:', error.message);
//         return res.status(500).json({ message: "Internal Server Error" });

//     }
// }

module.exports.logoutUser = async (req, res) => {
    try {
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            console.error("Token is missing during logout");
            return res.status(400).json({ message: "Token is required for logout" });
        }

        console.log("Token to be blacklisted:", token); // Debugging log

        await blacklistTokenModel.create({ token });

        res.clearCookie('token');

        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error('Error in logoutUser:', error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

