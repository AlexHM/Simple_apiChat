"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchemna = new mongoose_1.Schema({
    idUser: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("users", userSchemna);
