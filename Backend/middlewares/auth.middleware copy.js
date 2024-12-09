const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blackListToken.model')



module.exports.authUser = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) { return res.status(401).json({ message: "Unauthorized" }); }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isBlacklisted) return res.status(401).json({ message: "Unauthorized" })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);


        req.user = user;

        return next();


    } catch (
    error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }

}

// module.exports.authCaptain = async (req, res, next) => {
//     const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
//     if (!token) {
//         return res.status(401).json({ message: "Unauthorized" });
//     }

//     try {
//         const isBlacklisted = await blacklistTokenModel.findOne({ token });
//         if (isBlacklisted) {
//             return res.status(401).json({ message: "Token is blacklisted. Unauthorized" });
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const captain = await captainModel.findById(decoded._id);
//         if (!captain) {
//             return res.status(404).json({ message: "Captain not found" });
//         }

//         req.captain = captain; // Attach captain to request
//         next();
//     } catch (error) {
//         console.error("Error in authCaptain middleware:", error.message);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// };


// module.exports.authCaptain = async (req, res, next) => {
//     try {
//         // Retrieve the token from cookies or authorization header
//         const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

//         // Check if token exists
//         if (!token) {
//             return res.status(401).json({ message: "Unauthorized - Token not provided" });
//         }

//         // Check if token is blacklisted
//         const isBlacklisted = await blacklistTokenModel.findOne({ token });
//         if (isBlacklisted) {
//             return res.status(401).json({ message: "Unauthorized - Token blacklisted" });
//         }

//         // Verify the token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         // Fetch the captain data based on the decoded token
//         const captain = await captainModel.findById(decoded._id);
//         if (!captain) {
//             return res.status(401).json({ message: "Unauthorized - Captain not found" });
//         }

//         // Attach captain to the request object
//         req.captain = captain;
//         next();

//     } catch (error) {
//         console.error('Error in authCaptain middleware:', error.message);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// };

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) { return res.status(401).json({ message: "Unauthorized" }); }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isBlacklisted) return res.status(401).json({ message: "Unauthorized" })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);


        req.captain = captain;

        return next();


    } catch (
    error) {
        return res.status(500).json({ message: "Internal Server Error" });

    }
}
