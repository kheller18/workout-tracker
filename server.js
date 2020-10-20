const express = require("express");
const mongoose = require("mongoose");
// const session = require("express-session");
// const routes = require("./routes/api.js")

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(express.static("public/css"));
// app.use(express.static("public/html"));
// app.use(express.static("public/js"));


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );

// app.use(require("./routes/api.js"));
// require("./routes/api-routes.js")(app);
// app.use(require("./routes/api.js"));
app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});