const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            unique: true
        },
        desc: { //description
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        categories: {
            type: Array
        },
        size: {
            type: String
        },
        color: {
            type: String
        },
        price: {
            type: Number,
            required: true
        }
    }, {
        timestamps: true
    } //created at and updated at times -- a function of Mongoose
);

module.exports = mongoose.model("Product", ProductSchema);