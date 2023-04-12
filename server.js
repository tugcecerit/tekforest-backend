require('dotenv').config();

const { PORT } = process.env;

const express = require('express');
const app = express();
const routes = require('./routes/index')
const cors = require('cors');
const bodyParser = require("body-parser");
const passport = require('passport')
const users = require('./routes/users')

// Body Parser Middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/routes/users", users);

app.use('/', routes);

app.use((req, res) => {
    res.status(404).json({message: 'Not a proper route!'})
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));


