const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// structure of Workout
const workoutSchema = new Schema({
  day: { type: Date, default: Date.now() },
  exercises: { type: Array, required: true },
  totalDuration: { type: Number }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
