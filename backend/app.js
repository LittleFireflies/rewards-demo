const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Response Success")
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("Server is up and listening on " + PORT)
})