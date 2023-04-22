import Article from "../model/article.js";

export const getBlogCreatePage = async (req, res) => {
  const article = { title: "", description: "", markdown: "" };
  res.render("article/new", { article: article });
};

export const getSingleBlog = async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });

  if (!article) {
    res.redirect("/");
  }

  res.render("article/show", { article: article });
};

export const createBlog = async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });

  try {
    const newArticle = await article.save();
    res.redirect(`/articles/${newArticle.slug}`);
  } catch (error) {
    res.render("article/new", { article: article });
    console.log(error);
  }
};

export const deleteBlog = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

export const editBlog = async (req, res) => {
  const editBlog = await Article.findById(req.params.id);
  res.render("article/edit", { article: editBlog });
};

export const doneEditBlog = async (req, res) => {
  const updateBlog = await Article.findById(req.params.id);

  let article = updateBlog;
  article.title = req.body.title;
  article.description = req.body.description;
  article.markdown = req.body.markdown;
  article = await article.save();

  res.render("article/show", { article: article });
};
