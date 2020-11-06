const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(express.static("public/css"));
// app.use(express.static("public/html"));
// app.use(express.static("public/js"));


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});