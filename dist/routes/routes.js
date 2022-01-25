"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const controller_1 = __importDefault(require("../controllers/controller"));
class Routes {
    constructor() {
        this.enrutador = (0, express_1.Router)();
        this.enrutador.post("/message", (req, res) => {
            controller_1.default.sendMsg(req, res);
        });
        this.enrutador.get("/messages", (req, res) => {
            controller_1.default.getMsg(req, res);
        });
        this.enrutador.post("/user", (req, res) => {
            controller_1.default.addUser(req, res);
        });
        this.enrutador.get("/users", (req, res) => {
            controller_1.default.getUsers(req, res);
        });
        this.enrutador.get("/messages/:idUser", (req, res) => {
            controller_1.default.findMsg(req, res);
        });
        this.enrutador.get("/users/:idUser", (req, res) => {
            controller_1.default.findMsg(req, res);
        });
    }
}
exports.Routes = Routes;
