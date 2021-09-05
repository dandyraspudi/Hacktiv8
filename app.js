require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/index');
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(routes);

app.listen(port, _ => {
    console.log("listening port " + port);
})