const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

const gameRouter = require("./routes/gameRouter");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "http://192.168.1.99:5173",
      "http://192.168.1.59:5173",
      "https://frontend-production-4b8f.up.railway.app",
    ],
    methods: "GET,PUT,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);

app.use("/", gameRouter);

app.listen(process.env.PORT, () =>
  console.log(`App is listening on the ${process.env.PORT} `)
);
