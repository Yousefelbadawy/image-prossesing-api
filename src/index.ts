import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";
import { generateImage } from "./controllers/imagesControllers";
import { checkRequestIsValid } from "./middlewares/imagesMiddleware";

dotenv.config();
const PORT = process.env.PORT || 3030;

// create an instance server
const app: Application = express();



// add routing for / path
app.get("/", (req: Request, res: Response): void => {
  res.json({
    message: "Welcome to image proccessing app",
  });
});


// add routing for / path
app.get("/api/resize", checkRequestIsValid, generateImage);

// start express server
app.listen(PORT, (): void => {
  console.log(`Server is starting at port:${PORT}`);
});
export default app;


// remove this line
// http://localhost:3030/api/resize?name=pic.jpeg&hieght=100&width=100
