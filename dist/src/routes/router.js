"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = __importDefault(require("./example"));
function router(app) {
    /**
     * Every source are specifed here
     */
    app.use("/", example_1.default);
}
exports.default = router;
