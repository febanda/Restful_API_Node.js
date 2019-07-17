//Import Package
const express = require('express');

//Execute it 
const app = express();

const mongoose = require('mongoose')


//Middlewares - function that executes when routes are being hit 
// app.use('/posts', () => {
//     console.log('This is middleware running')
// })


//ROUTES 
app.get('/', (req, res) => {
    res.send('We are on home')
})

app.get('/posts', (req, res) => {
    res.send('We are on posts')
})

//Connect to DB 
mongoose.connect('mongodb+srv://febanda91:Frankie@1991@cluster0-l1rbz.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true },
() => {console.log('connected to DB!')
})


//How do we start listening to the server 
app.listen(3000);