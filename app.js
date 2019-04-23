
const express = require('express');
const routes = require('./routes/api');

const app = express();

app.use(routes);



// Server @ localHost
const port = process.env.port || 5000;
app.listen(port, () => {
    console.log("listening on port" + port);
}); 