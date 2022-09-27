"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
const router_1 = __importDefault(require("./src/routes/router"));
const PORT = parseInt(process.env.PORT || "8000");
const HOSTNAME = process.env.HOST || "localhost";
exports.default = new server_1.default().router(router_1.default).listen(PORT, HOSTNAME);
