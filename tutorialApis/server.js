//import cors, express 
const express = require('express');
const cors = require('cors');
var corsOptions = {
    origin: "http://localhost:3031"
}

//initialize the app and set the port number
const app = express();
const PORT = 3000;

app.use(cors(corsOptions));
//parse request of content types as a json format
app.use(express.json())
//parse request of content types as urlencode
app.use(express.urlencoded({extended: true}))

const db = require('./models')
db.mongoose.connect(
    db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected!!")
    }).catch(err => {
        console.log("Not connected", err);
        process.exit();
    })

//set a test endpoint

app.get('/', (req, res)=> {
    res.send('hello we are testing the server!!!')
})

//listen to the server at the given port
app.listen(PORT, (req, res) => {
    console.log(`server running at port ${PORT}`)
})