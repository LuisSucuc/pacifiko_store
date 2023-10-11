import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

app.get("/", (req: Request, res: Response) => {
  res.send({ error: false, message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
