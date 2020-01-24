const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require("passport");

const users = require("./routes/api/users");

const db = require('./db')
const postRouter = require('./routes/post-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB csatlakozási hiba:'))

app.get('/', (req, res) => {
    res.send('Szervusz!')
})

app.use('/api', postRouter)


app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

app.listen(apiPort, () => console.log(`A szerver a következő porton fut: ${apiPort}`))