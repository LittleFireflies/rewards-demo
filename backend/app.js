const express = require('express')
const app = express()

const rewardsRouter = require('./routes/rewards')

app.get("/", (req, res) => {
    res.send("Hello!")
})

app.use(rewardsRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("Server is up and listening on " + PORT)
})