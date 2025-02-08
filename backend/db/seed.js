import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function startUp() {
  try {
    await prisma.game.createMany({
      data: [
        {
          level: "easy",
          imageUrl:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1738928321/wheres_waldo/levels/mrnprcsbvutjkvspurse.webp",
        },
        {
          level: "medium",
          imageUrl:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1738928321/wheres_waldo/levels/qefhrkvx1zrdlnlfneor.webp",
        },
        {
          level: "hard",
          imageUrl:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1738928321/wheres_waldo/levels/vd4wndr795ecfgr8khvw.webp",
        },
      ],
    });
  } catch (err) {
    console.log(err);
    return err;
  }
}

await startUp();
