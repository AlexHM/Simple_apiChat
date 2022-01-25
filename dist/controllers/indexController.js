"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.txt = "El servidor me ha respondido correctamente";
    }
    mostrarTxt(req, res) {
        res.status(200).json({ res: this.txt });
    }
}
exports.default = new IndexController();
