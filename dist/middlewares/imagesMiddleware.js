"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRequestIsValid = void 0;
var fs_1 = __importDefault(require("fs"));
function checkRequestIsValid(req, res, next) {
    if (req.query && req.query.name && req.query.width && req.query.hieght) {
        if (fs_1.default.existsSync(process.cwd() + "/src/assets/" + req.query.name)) {
            next();
        }
        else {
            res.status(404).send("File Not Found");
        }
    }
    else {
        res.status(422).send("send these paramters (ex. name=example.jpg,hieght=100,width=100)");
    }
}
exports.checkRequestIsValid = checkRequestIsValid;
