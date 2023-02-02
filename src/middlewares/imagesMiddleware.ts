import { Request, Response, NextFunction } from "express";
import fs from "fs";

export function checkRequestIsValid(req: Request, res: Response, next: NextFunction): void {
  if (req.query && req.query.name && req.query.width && req.query.hieght) {
    if (fs.existsSync(process.cwd() + "/src/assets/" + req.query.name)) {
      next();
    } else {
      res.status(404).send("File Not Found");
    }
  } else {
    res.status(422).send("send these paramters (ex. name=example.jpg,hieght=100,width=100)");
  }
}
