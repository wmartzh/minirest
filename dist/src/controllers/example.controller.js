"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const example_service_1 = __importDefault(require("../services/example.service"));
class ExampleController {
    helloWorld(_req, res) {
        res.send(example_service_1.default.getMessage());
    }
}
exports.default = new ExampleController();
