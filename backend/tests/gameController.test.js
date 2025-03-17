const express = require("express");
const request = require("supertest");

const gameRoute = require("../routes/gameRouter");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/", gameRoute);

describe("index route test", () => {
  test("index route works", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect({ id: "5cfc2c7e-19af-4e93-832c-ce01175458b0" })
      .expect(200, done);
  });
});

describe("all game level routes work", () => {
  test("specific game route works", (done) => {
    request(app)
      .get("/game/5cfc2c7e-19af-4e93-832c-ce01175458b0")
      .expect("Content-Type", /json/)
      .expect({
        level: {
          id: "5cfc2c7e-19af-4e93-832c-ce01175458b0",
          imageUrl:
            "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740312900/wheres_waldo/levels/mftze9ln3armpi57s8ia.webp",
        },
        characters: [
          {
            id: "3faa19a8-918d-45b2-8595-2b221b38b732",
            name: "Geralt",
            image:
              "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740314858/wheres_waldo/characters/nxtar8ujnmtu6jaoviia.webp",
            xCordMin: 67,
            xCordMax: 70,
            yCordMin: 52,
            yCordMax: 54,
          },
          {
            id: "69b047db-0477-4532-91e3-6938b8445624",
            name: "Worm",
            image:
              "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740314858/wheres_waldo/characters/dyhi5fdaxtgjhiia2n75.webp",
            xCordMin: 16,
            xCordMax: 17,
            yCordMin: 57,
            yCordMax: 57,
          },
          {
            id: "9de46de9-b6a0-4a09-8fdb-a1ea008c555a",
            name: "Metroid Fusion",
            image:
              "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740314858/wheres_waldo/characters/oiau7oat5siljs7xlwbv.webp",
            xCordMin: 62,
            xCordMax: 63,
            yCordMin: 88,
            yCordMax: 89,
          },
          {
            id: "db756d08-0e95-4bcf-93d5-6a02779a481b",
            name: "Link",
            image:
              "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1740314858/wheres_waldo/characters/ahw5ljboihvxiwufcui4.webp",
            xCordMin: 22,
            xCordMax: 23,
            yCordMin: 89,
            yCordMax: 90,
          },
        ],
      })
      .expect(200, done);
  });
});

describe("error checking, for specific game route", () => {
  test("error check test", (done) => {
    request(app)
      .get("/game/1")
      .expect("Content-Type", /json/)
      .expect({
        message: "Level not found",
      })
      .expect(404, done);
  });
});
43;
