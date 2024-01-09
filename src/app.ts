import express, { Request, Response, urlencoded } from "express";
import * as fs from "fs";
import * as path from "path";
const server = express();
const PORT = 9000;
server.use(urlencoded())
server.use(express.static("public"))

server.get("/", (req: Request, res: Response) => {
    const data:string = fs.readFileSync(path.join("public/db.json")).toString()
    JSON.parse(data).pop()
  res.json("hello world!");
});
server
  .route("/user")
  .get((req: Request, res: Response) => {
    res.json("hello user!");
  })
  .post()
  .patch();

server
  .route("/product")
  .get((req: Request, res: Response) => {
    res.json("hello product!");
  })
  .post()
  .patch();

server.listen(PORT, () => {
  console.log(`Server listening on port 9000, http://localhost:${PORT}`);
});