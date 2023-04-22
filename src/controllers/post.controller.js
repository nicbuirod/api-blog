import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getFullPost = async (req, res) => {
  try {
    const allPost = await prisma.post.findMany({
      select: {
        name: true,
        body: true,
        comments: {
          select: {
            text: true,
          },
        },
      },
    });

    const computedData = allPost.map(({ name, body, comments }) => {
      return {
        title: name,
        body,
        comments,
      };
    });

    res.status(200).json(computedData);
  } catch (error) {
    console.log("en error");
    res.status(500).json({ error: true });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = await prisma.post.create({
      data: req.body,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
