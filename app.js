var express = require('express')
var app = express()
//importing the sqlite module
const sqlite3 = require('sqlite3').verbose();

const PORT = 3000

//testing 
app.get('/', function(request, respond) {
    respond.send('Bom dia mundo')
})

app.listen(PORT, () => console.log(`tessssting on port ${PORT}`))