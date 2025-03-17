const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

const validateUser = [
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long."),
];

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

const saveWinner = [
  validateUser,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json(errors);
    }

    const { username, score } = req.body;

    const user = await db.getUser(username);

    if (user) {
      return res.status(422).json({ errors: [{ msg: "User already exists" }] });
    }

    const winner = await db.saveWinner(username, score);

    return res.json(winner);
  }),
];

module.exports = {
  getAllGameLevels,
  getGameLevel,
  validateTarget,
  saveWinner,
};
