import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//create one comment
export const createComment = async (req, res) => {
  try {
    const newComment = await prisma.comments.create({
      data: req.body,
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

//get list of all comments
export const commentList = async (req, res) => {
  try {
    const comments = await prisma.comments.findMany();
    if (comments.length >= 1) {
      res.status(200).json(comments);
    } else {
      res.status(204).json({ messageError: "No content" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

//get one comment by id
export const commentId = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await prisma.comments.findUnique({
      where: {
        idcomments: +id,
      },
    });

    if (comment && Object.keys(comment).length > 0) {
      res.status(200).json(comment);
    } else {
      res.status(204).json({ messageError: "No content" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

//update a comment

export const commentUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await prisma.comments.update({
      where: {
        idcomments: +id,
      },
      data: req.body,
    });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

//delete a comment
export const commentDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.comments.delete({
      where: {
        idcomments: +id,
      },
    });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
