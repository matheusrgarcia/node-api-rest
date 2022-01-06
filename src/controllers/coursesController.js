const express = require("express");

const router = express.Router();

const courses = [{ name: "course1", id: 1 }, { name: "course2", id: 2 }, { name: "course3" , id: 3 }];

router.get("/courses", (req, res) => {
  res.send(courses);
});

router.get("/courses/:id", (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );

  if (!course) {
    return res.status(404).send("The course with the given id was not found.");
  }
  res.send(course);
});

module.exports = app => app.use('/api', router);
