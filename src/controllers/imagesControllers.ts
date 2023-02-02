import { Request, Response } from "express";
import sharp from "sharp";
import fs from "fs";



export async function generateImage(req: Request, res: Response): Promise<void> {
  const name = req.query.name as string,
    width = (<any>req.query.width) as number,
    hieght = (<any>req.query.hieght) as number;



  const newImageContent = resizeImage(name, width,hieght);
  if (newImageContent) {
    res.setHeader("content-type", "image/jpeg");
    res.status(200).send(newImageContent);
  } else res.status(500).send("Something went wrong");
}



export async function resizeImage(name: string, width: number,hieght:number): Promise<any> {



  const newImagepath = process.cwd() + "/src/assets/" + "new" + "_" + width + "_" + hieght + ".jpg";
  
  // if the file was resized before no need to regenerate the same file
  if (!fs.existsSync(newImagepath)) {

    await sharp(process.cwd() + "/src/assets/" + name)
      .resize(Number(hieght), Number(width))
      .toFile(newImagepath);
  }



  const data = fs.readFileSync(newImagepath);

  const newImageContent = Buffer.from(data);

  return newImageContent;
  
}

