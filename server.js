const express = require('express')
const app = express()

app.get("/api", (reg, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})


app.listen(5000, () => { console.log('server started') })