const router = require("express").Router();
const Workout = require("../../models/workout.js");

// posts a new workout
router.post("/", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// gets a workout
router.get("/", (req, res) => {
  Workout.find({})
    .sort({ day: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// updates an existing workout
router.put("/:id", ({ body, params }, res) => {
  Workout.update(
    { 
      _id: params.id 
    },
    {
      $push: {
        exercises: body
      },
      $inc: {
        totalDuration: body.duration
      }
    },
    (err, edited) => {
      if (err) {
        res.send(error);
      } else {
        res.send(edited);
      }
    }
  );
});

// gets workout in range
router.get("/range", (_, res) => {
  let lowerRange = new Date();
  lowerRange.setDate(lowerRange.getDate() - 7);

  Workout.find({})
    .where("day").gte(lowerRange)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
