const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const getAllGameLevels = asyncHandler(async (req, res, next) => {
  const levels = await db.getAllGameLevels();
  return res.json(levels);
});

module.exports = {
  getAllGameLevels,
};
