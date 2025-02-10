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
