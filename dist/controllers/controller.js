"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = __importDefault(require("../models/message"));
const user_1 = __importDefault(require("../models/user"));
class Controller {
    sendMsg(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let msg = new message_1.default(req.body);
                yield msg.save();
                res.status(200).json({ res: "Saved successfull" });
            }
            catch (error) {
                res.status(404).json({ res: "Error", error });
            }
        });
    }
    getMsg(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield message_1.default.find();
                res.status(200).json({ res: data });
            }
            catch (error) {
                res.status(404).json({ res: "Error", error });
            }
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new user_1.default(req.body);
                yield user.save();
                res.status(200).json({ res: "Added successfull", users: user });
            }
            catch (error) {
                res.status(404).json({ res: "Error", error });
            }
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield user_1.default.find();
                res.status(200).json({ res: data });
            }
            catch (error) {
                res.status(404).json({ res: "Error", error });
            }
        });
    }
}
exports.default = new Controller();
