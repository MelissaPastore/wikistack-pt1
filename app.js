const express = require("express");
const morgan = require("morgan");
const main = require("./views/main");
const { db, Page, User } = require("./models");
const app = express();
const userRouter = require("./routes/users");
const wikiRouter = require("./routes/wiki");

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use("/wiki", wikiRouter);
app.use("/users", userRouter);

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

const init = async function () {
  await db.sync();

  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
