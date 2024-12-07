let express = require('express');
let mongoose = require('mongoose');
let passport = require('passport');
let router = require('./routes/apis');

let app = express();
let port = 3900;
app.use('/api/', router);


let db = require('./setUp/urls').mongoURL;
mongoose.connect(db)
    .then(() => {
        console.log('mongoose connected');
    }).catch((error) => {
        console.log(error);
    });

app.listen(port, () => {
    console.log(`server is runing at port ${port}`);
});