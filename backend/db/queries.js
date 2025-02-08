const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllGameLevels() {
  try {
    return prisma.game.findMany({
      select: {
        id: true,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getAllGameLevels,
};
