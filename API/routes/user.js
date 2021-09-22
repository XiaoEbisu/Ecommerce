const User = require("../models/User");
const {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
} = require("./verifyToken");
const CryptoJS = require("crypto-js");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    //Encrypt new password
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, //update new information
            {
                new: true
            } // return new object
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE 
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL USERS or 5 NEW USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new; //if route have "?new=true" then get 5 new users
    try {
        const users = query 
        ?   await User.find().sort({_id: -1}).limit(5) 
        :   await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {
            password,
            ...others
        } = user._doc; //document of MongoDB

        res.status(200).json(others); //return everything except password
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER STATS - number of new user register in recent month
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte : lastYear } } }, //filter all User who had registed in this year then ...
            { $project: { month: { $month: "$createdAt" } } }, //take month of createdDate of every instance User this year then ...
            { $group: { _id: "$month",          // "_id" is unique and required
                        total: { $sum: 1 } }, }
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;