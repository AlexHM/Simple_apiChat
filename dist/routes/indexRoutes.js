"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRoutes = void 0;
const express_1 = require("express");
const indexController_1 = __importDefault(require("../controllers/indexController"));
class IndexRoutes {
    constructor() {
        this.enrutador = (0, express_1.Router)();
        this.enrutador.get("/javi", (req, res) => {
            indexController_1.default.mostrarTxt(req, res);
        });
    }
}
exports.IndexRoutes = IndexRoutes;
