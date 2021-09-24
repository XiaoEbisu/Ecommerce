const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
    // CREATE A CHARGE
    stripe.charges.create({
        source:req.body.tokenId,
        amount: req.body.amount,
        currency: "eur", // or "usd"
    }, (stripeErr, stripeRes) =>{
        if (stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    }); 
 });