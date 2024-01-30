const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
})

module.exports = mongoose.model("Todo", todoSchema);