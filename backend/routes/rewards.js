const express = require('express')
const router = express.Router()

router.get("/rewards", (req, res) => {
    var rewards1 = {"name": "HP Pavilion Power 580-142D Desktop PC Gaming with HP 23ES Monitor [23 Inch]", "image": "https://www.dicoding.com/images/original/reward/20180813091901d47d955755dee7fa508e73d821b4e1e0.jpg", "points": 50000, "available": true}
    var rewards2 = {"name": "Nintendo Switch Game Console", "image": "https://www.dicoding.com/images/original/reward/20190515121650a170d26c729ad257b1cff72a627f1e48.jpg", "points": 15000, "available": true}
    var rewards3 = {"name": "Samsung Galaxy A50 Smartphone", "image": "https://www.dicoding.com/images/original/reward/20190415104835ad3311858551f4f603441b42f366dd01.jpg", "points": 11000, "available": true}
    var rewards4 = {"name": "Samsung Curved Monitor 24 inch", "image": "https://www.dicoding.com/images/original/reward/20181210204649dd677660d9a305d0f2eeb9311c79d64d.jpg", "points": 7000, "available": true}
    var rewards5 = {"name": "Jaket Hoodie Dicoding", "image": "https://www.dicoding.com/images/original/reward/20190418095109912b2b1958f78bcabdca5711f0a89c36.jpg", "points": 1500, "available": true}
    var rewards6 = {"name": "T-shirt Dicoding Graduate", "image": "https://www.dicoding.com/images/original/reward/201610122348224fc7cfc72c9bf043aa79a165b5e6e180.jpeg", "points": 300, "available": true}

    res.json([rewards1, rewards2, rewards3, rewards4, rewards5, rewards6])
})

module.exports = router