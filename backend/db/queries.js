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

module.exports = {
  getAllGameLevels,
  getGameLevel,
};
