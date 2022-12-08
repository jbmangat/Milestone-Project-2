const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('index?')
})

// doesnt work yet
// router.post('/post', (req, res) => {
//     res.send('post route')
// })

// router.put('/update', (req, res) => {
//     res.send('update')
// })

// router.delete('/delete', (req, res) => {
//     res.send('dleeld')
// })

module.exports = router