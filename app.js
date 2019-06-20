const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

const app = express();

// set views folder
app.set('views', path.join(__dirname, '/src/views'));

// set express urlencoded middelwear
app.use(session({
    secret: "dreamTeam",
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set view engine
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.render('registration');
});




app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});