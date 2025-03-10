const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const getAllGameLevels = asyncHandler(async (req, res, next) => {
  const levels = await db.getAllGameLevels();

  if (levels.length < 1) {
    return res.status(404).json({ message: "Levels not found" });
  }
  return res.json(levels);
});

const getGameLevel = asyncHandler(async (req, res, next) => {
  const level = await db.getGameLevel(req.params.id);
  const characters = await db.getGameTargets();
  if (!level) {
    return res.status(404).json({ message: "Level not found" });
  }

  return res.json({ level, characters });
});

const validateTarget = asyncHandler(async (req, res, next) => {
  const { target, cordX, cordY } = req.body;

  const validateTarget = await db.validateTarget(
    target,
    Number(cordX),
    Number(cordY)
  );
  if (validateTarget) {
    return res.json(validateTarget);
  }
  return res.json({ message: "Target Not Found" });
});

const saveWinner = asyncHandler(async (req, res, next) => {
  const { username, score } = req.body;

  const winner = await db.saveWinner(username, score);

  return res.json(winner);
});

module.exports = {
  getAllGameLevels,
  getGameLevel,
  validateTarget,
  saveWinner,
};
