const express = require('express');
const dayRouter = require('./routes/day');
const monthRouter = require('./routes/month');
const weekRouter = require('./routes/week');
const quarterRouter = require('./routes/quarter');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/day', dayRouter);
app.use('/month', monthRouter);
app.use('/week', weekRouter);
app.use('/quarter', quarterRouter);
app.listen(3012, function () {
    console.log("Server started");
});
