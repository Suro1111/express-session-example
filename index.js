import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "cvkdjfkhdwihdiqhdhisswsw",
    cookie: {
      maxAge: 60000,
    },
  })
);

app.get("/", (req, res) => {
  if (req.session.view === undefined) {
    req.session.view = 1;
  } else {
    req.session.view++;
  }
  res.send(`<h1>Number of view: ${req.session.view}</h1>`);
});

app.listen(process.env.MY_APP_PORT);
