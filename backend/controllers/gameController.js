const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const getAllGameLevels = asyncHandler(async (req, res, next) => {
  const levels = await db.getAllGameLevels();

  if (levels.length < 1) {
    return res.status(404).json({ message: "Levels not found" });
  }
  return res.json(levels);
});

module.exports = {
  getAllGameLevels,
};
