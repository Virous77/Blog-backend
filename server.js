import express from "express";
import blogRouter from "./src/routes/index.js";
import imageRouter from "./src/images/createImage.js";
import mongoose from "mongoose";
import methodOverride from "method-override";
import Article from "./src/model/article.js";
import * as dotenv from "dotenv";
import { formattedDate } from "./utils/data.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use("/articles", blogRouter);
app.use("/image", imageRouter);

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
