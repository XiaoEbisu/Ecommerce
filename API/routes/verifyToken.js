const jwt = require("jsonwebtoken");
const { collection } = require("../models/User");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1]; 
        //split the authHeader to an array (separated by " ") and take the array[1] - is mean our token
        //the array[0] here must be something like "Bearer"
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(401).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else {
         return res.status(401).json("You are not authenticated!");   
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) { 
            //this mean if you are not the right user or an admin, you can't change anything in this user's information
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

module.exports = { 
    verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin }; //export object 