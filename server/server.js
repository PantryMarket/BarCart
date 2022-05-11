const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routes/apiRouter');
const fridgeRouter = require('./routes/fridgeRouter');

const PORT = 3000;

app.use(express.json())
/**
 * start server
 */

app.use('/api/fridge', fridgeRouter);
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
    return res.status(err.status).json(err.message);
  })
  


  // app.use("*", (req, res) => {
  //   res.status(400).send('Invalid webpage');
  // })


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});