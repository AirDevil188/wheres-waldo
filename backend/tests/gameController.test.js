const express = require("express");
const request = require("supertest");

const gameRoute = require("../routes/gameRouter");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/", gameRoute);

test("index route works", (done) => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect([
      { id: "443f2e99-55b8-45c2-8f76-37367938a9aa", level: "easy" },
      { id: "c66581e0-ae73-4d5b-bcf4-4f355c5c7006", level: "medium" },
      { id: "01f06f35-4215-4964-a765-be1f9dd80625", level: "hard" },
    ])
    .expect(200, done);
});

describe("all game level routes work", () => {
  test("specific game route works", (done) => {
    request(app)
      .get("/game/443f2e99-55b8-45c2-8f76-37367938a9aa")
      .expect("Content-Type", /json/)
      .expect({
        id: "443f2e99-55b8-45c2-8f76-37367938a9aa",
        level: "easy",
        imageUrl:
          "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1738928321/wheres_waldo/levels/mrnprcsbvutjkvspurse.webp",
      })
      .expect(200, done);
  });
  test("medium level route works", (done) => {
    request(app)
      .get("/game/c66581e0-ae73-4d5b-bcf4-4f355c5c7006")
      .expect("Content-Type", /json/)
      .expect({
        id: "c66581e0-ae73-4d5b-bcf4-4f355c5c7006",
        level: "medium",
        imageUrl:
          "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1738928321/wheres_waldo/levels/qefhrkvx1zrdlnlfneor.webp",
      })
      .expect(200, done);
  });

  test("hard level route works", (done) => {
    request(app)
      .get("/game/01f06f35-4215-4964-a765-be1f9dd80625")
      .expect("Content-Type", /json/)
      .expect({
        id: "01f06f35-4215-4964-a765-be1f9dd80625",
        level: "hard",
        imageUrl:
          "https://res.cloudinary.com/ddxkbe6lh/image/upload/v1738928321/wheres_waldo/levels/vd4wndr795ecfgr8khvw.webp",
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
