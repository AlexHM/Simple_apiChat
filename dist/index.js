"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const morgan_1 = __importDefault(require("morgan"));
require("./database");
class Index {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.set("port", process.env.PORT || 3000);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        let port = this.app.get("port");
        this.app.use(new routes_1.Routes().enrutador);
        this.app.listen(port, () => {
            console.log("Server listening on port: ", port);
        });
    }
}
new Index();
