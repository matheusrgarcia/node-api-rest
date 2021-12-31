const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const courses = [{ name: "course1", id: 1 }, { name: "course2", id: 2 }, { name: "course3" , id: 3 }];

app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );

  if (!course) {
    return res.status(404).send("The course with the given id was not found.");
  }
  res.send(course);
});
