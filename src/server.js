const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

require('./controllers/coursesController')(app);

app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));