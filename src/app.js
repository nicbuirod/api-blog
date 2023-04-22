import express from "express";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";

const app = express();
const PORT = process.env.PORT;

//middleware

app.use(express.json());

//
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

app.listen(4000, () => {
  console.log("server initialized...");
});
