"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv = __importStar(require("dotenv"));
var imagesControllers_1 = require("./controllers/imagesControllers");
var imagesMiddleware_1 = require("./middlewares/imagesMiddleware");
dotenv.config();
var PORT = process.env.PORT || 3030;
// create an instance server
var app = (0, express_1.default)();
// add routing for / path
app.get("/", function (req, res) {
    res.json({
        message: "Welcome to image proccessing app",
    });
});
// add routing for / path
app.get("/api/resize", imagesMiddleware_1.checkRequestIsValid, imagesControllers_1.generateImage);
// start express server
app.listen(PORT, function () {
    console.log("Server is starting at port:".concat(PORT));
});
exports.default = app;
// remove this line
// http://localhost:3030/api/resize?name=pic.jpeg&hieght=100&width=100
