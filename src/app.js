import express from "express";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "api blog" });
});

//middleware

app.use(express.json());

//
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

app.listen(PORT, () => {
  console.log("server initialized...");
});
