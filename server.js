const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

// port definition
const PORT = process.env.PORT || 3000;

// initializing express server
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(routes);

// database connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
