const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json());

//configuration fo connection
//importing the sqlite module
const sqlite3 = require('sqlite3').verbose();
// const sqlite3 = new sqlite3({
//     user: 'me',
//     host: 'localhost',
//     database: 
// })


let db = new sqlite3.Database('/Users/tpl3/permits.db', sqlite3.OPEN_READONLY, (err) => {
    if(err) {
        console.log(err.message);
    }
    console.log('Connected to the permits database.');
});

db.serialize(() => {
    db.each(`SELECT `)
})

//To Close database
function closeDb() {
    console.log("closeDb");
    db.close();
}

//testing 
app.get('/', function(request, respond) {
    respond.send('Bom dia mundo')
    console.log('it worked!')
})

app.listen(PORT, () => console.log(`testing, you are LIVE  - on port ${PORT}!!!`))

