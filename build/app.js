const express = require('express');
const statsRouter = require('./routes/stats.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/stats', statsRouter);
app.listen(3012, function () {
    console.log("Server started");
});
//# sourceMappingURL=app.js.map