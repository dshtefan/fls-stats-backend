const express = require('express');

const dayRouter = require('./routes/day');
const monthRouter = require('./routes/month');
const weekRouter = require('./routes/week');
const quarterRouter = require('./routes/quarter');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/day', dayRouter);
app.use('/month', monthRouter);
app.use('/week', weekRouter);
app.use('/quarter', quarterRouter);

app.listen(3012, function(){
  console.log("Server started");
});
