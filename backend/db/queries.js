const { PrismaClient } = require("@prisma/client");

const databaseUrl =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
});

async function getAllGameLevels() {
  try {
    return prisma.game.findMany({
      select: {
        id: true,
        level: true,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

async function getGameLevel(id) {
  try {
    return await prisma.game.findUnique({
      where: {
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function validateTarget(name, xCord, yCord) {
  try {
    return await prisma.target.findFirst({
      where: {
        name: name,
        xCordMax: {
          gte: xCord,
        },
        xCordMin: {
          lte: xCord,
        },
        yCordMax: {
          gte: yCord,
        },
        yCordMin: {
          lte: yCord,
        },
      },
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function saveWinner(username, score) {
  try {
    return await prisma.player.create({
      data: {
        username: username,
        score: score,
      },
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = {
  getAllGameLevels,
  getGameLevel,
  validateTarget,
  saveWinner,
};
