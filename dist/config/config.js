"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    DB: {
        URL_MONGO: process.env.MONGODB_URL || "mongodb://localhost/apiChat",
        USER_MONGO: process.env.MONGODB_USER || "",
        PASSWORD_MONGO: process.env.MONGODB_PASS || "",
    },
};
