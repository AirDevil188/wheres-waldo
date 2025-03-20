const { Router } = require("express");

const gameController = require("../controllers/gameController");

const gameRouter = Router();

gameRouter.get("/", gameController.getAllGameLevels);

gameRouter.get("/game/highscore", gameController.getHighScores);

gameRouter.get("/game/:id", gameController.getGameLevel);

gameRouter.post("/game/:id", gameController.validateTarget);

gameRouter.post("/game/:id/winner", gameController.saveWinner);

module.exports = gameRouter;
