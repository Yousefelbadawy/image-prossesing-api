import supertest from "supertest";
import app from "../index";
import {resizeImage} from "../controllers/imagesControllers";

const request = supertest(app);

describe("Image resize testing", () => {
    it("success when all parmeters are correct", async () => {
        await request.get("/api/resize?name=pic.jpeg&hieght=100&width=100").expect(200);
    });

    it("if missing paremeter return 404", async () => {
        await request.get("/api/resize?hieght=100&width=100").expect(422);
    });


    it("if image not found send 404", async () => {
        await request.get("/api/resize?name=abcde.jpeg&hieght=100&width=100").expect(404);
    });

    it("resizing function should not throw error if parameters are correct", async () => {
        expect(async ()=>{
            await resizeImage("pic.jpeg",55,55)
        }).not.toThrow();
    
    });

    it("if image not found send 404", async () => {
        await request.get("/api/resize?name=abcde.jpeg&hieght=100&width=100").expect(404);
    });

});
