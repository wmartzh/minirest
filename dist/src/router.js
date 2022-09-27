"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const example_controller_1 = __importDefault(require("./controllers/example.controller"));
function router(app) {
    app.use("/", example_controller_1.default.helloWorld);
}
exports.default = router;
