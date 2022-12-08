// DEPENDENCIES
const express = require('express')

// CONFIG
require('dotenv').config()
const app = express()

// MIDDLEWARE


// ROUTES
app.get('/', (req, res) => {
    res.send('Workout time!')
})

// CONTROLLERS
const workoutController = require('./controllers/workout_controller')
app.use('/workout', workoutController)

// 404 ERROR PAGE
app.get('*', (req, res) => {
    res.send('404')
})

// LISTEN
app.listen(process.env.PORT)