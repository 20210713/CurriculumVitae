const express = require('express')
const app = express()
 
app.use(express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/CV.html")
})

app.listen(3000)
console.log("Curriculum Vitae");
console.log("http://localhost:3000")