const express = require('express')
const router = express.Router()

router.get("/rewards", (req, res) => {
    res.send("Rewards")
})

module.exports = router