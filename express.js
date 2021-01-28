const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("welcome to my channel")
});

app.get("/about", (req, res) => {
    res.send("hlo this is about page")
})

// Caculator of two no count
app.get("/calculator", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/calculator", (req, res) => {

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum = n1 + n2;

    res.send("the sum of these no is" + sum);
})

// BMI calculator

app.get("/bmi", (req, res) => {
    res.sendFile(__dirname + "/bmi.html")
})


app.post("/bmi", (req, res) => {

    let n1 = Number(req.body.width);
    let n2 = Number(req.body.height);

    let calculate = n1 / (n2 * n2);

    res.send("the sum of these no is" + " " + calculate);
})


// server listening
app.listen(3000, (req, res) => {
    console.log('server is running at 3000')
});




