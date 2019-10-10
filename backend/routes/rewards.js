const express = require('express')
const router = express.Router()

router.get("/rewards", (req, res) => {
    var rewards1 = {"name": "HP Pavilion Power 580-142D Desktop PC Gaming with HP 23ES Monitor [23 Inch]", "points": 50000, "available": true}
    var rewards2 = {"name": "Nintendo Switch Game Console", "points": 15000, "available": true}
    var rewards3 = {"name": "Samsung Galaxy A50 Smartphone", "points": 11000, "available": true}
    var rewards4 = {"name": "Samsung Curved Monitor 24 inch", "points": 7000, "available": true}
    var rewards5 = {"name": "Jaket Hoodie Dicoding", "points": 1500, "available": true}
    var rewards6 = {"name": "T-shirt Dicoding Graduate", "points": 300, "available": true}

    res.json([rewards1, rewards2, rewards3, rewards4, rewards5, rewards6])
})

module.exports = router