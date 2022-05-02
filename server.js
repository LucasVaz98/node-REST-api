const express = require("express");
const app = express();

app.use(express.json());

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening  in port' + listener.address().port)
})