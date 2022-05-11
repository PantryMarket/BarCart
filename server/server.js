const path = require("path");
const express = require("express");

const app = express();


const apiRouter = require("./routes/apiRouter");
const fridgeRouter = require("./routes/fridgeRouter");
const fridgeController = require("./controllers/fridgeController");
const apiController = require("./controllers/apiController");

const PORT = 3000;

app.use(express.json());


app.get(
  "/api/possible",
  fridgeController.getIngArr,
  apiController.possibleRecipes,
  (req, res) => {
    return res.status(200).json(res.locals.possibleRecipes);
  }
);

app.use("/api/fridge", fridgeRouter);
app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  return res.status(err.status).json(err.message);
});

// app.use("*", (req, res) => {
//   res.status(400).send('Invalid webpage');
// })

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
