import { PrismaClient } from "@prisma/client";

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
async function startUp() {
  try {
    await prisma.game.createMany({
      data: [
        {
          level: "easy",
          imageUrl:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740312900/wheres_waldo/levels/mftze9ln3armpi57s8ia.webp",
        },
        {
          level: "medium",
          imageUrl:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740312900/wheres_waldo/levels/mftze9ln3armpi57s8ia.webp",
        },
        {
          level: "hard",
          imageUrl:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740312900/wheres_waldo/levels/mftze9ln3armpi57s8ia.webp",
        },
      ],
    });

    await prisma.target.createMany({
      data: [
        {
          name: "Geralt",
          image:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740314858/wheres_waldo/characters/nxtar8ujnmtu6jaoviia.webp",
          xCordMax: 70,
          xCordMin: 67,
          yCordMax: 54,
          yCordMin: 52,
        },
        {
          name: "Worm",
          image:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740314858/wheres_waldo/characters/dyhi5fdaxtgjhiia2n75.webp",
          xCordMax: 17,
          xCordMin: 16,
          yCordMax: 57,
          yCordMin: 57,
        },
        {
          name: "Metroid Fusion",
          image:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740314858/wheres_waldo/characters/oiau7oat5siljs7xlwbv.webp",
          xCordMax: 63,
          xCordMin: 62,
          yCordMax: 89,
          yCordMin: 88,
        },
        {
          name: "Link",
          image:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740314858/wheres_waldo/characters/ahw5ljboihvxiwufcui4.webp",
          xCordMax: 23,
          xCordMin: 22,
          yCordMax: 90,
          yCordMin: 89,
        },
      ],
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

await startUp();
