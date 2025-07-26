const express = require("express");
const router = express.Router();
const db = require("../models");

// Get all users
router.get("/users", async (req, res) => {
  const users = await db.User.findAll();
  res.json(users);
});

// Get conversations for a user
router.get("/users/:id/conversations", async (req, res) => {
  const conversations = await db.Conversation.findAll({
    where: { UserId: req.params.id },
    include: db.Message,
  });
  res.json(conversations);
});

module.exports = router;