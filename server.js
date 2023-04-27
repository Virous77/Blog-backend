import express from "express";
import blogRouter from "./src/routes/index.js";
import mongoose from "mongoose";
import cors from "cors";
import methodOverride from "method-override";
import Article from "./src/model/article.js";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { formattedDate } from "./utils/data.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use("/articles", blogRouter);

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("index", { articles: articles, formattedDate });
});

const PORT = process.env.port || 3000;
mongoose
  .connect(process.env.MONGO_URI || p)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
