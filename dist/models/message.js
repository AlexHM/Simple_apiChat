"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    idUser: {
        type: Number,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("message", messageSchema);
