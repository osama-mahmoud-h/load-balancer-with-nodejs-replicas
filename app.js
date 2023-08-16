const dotenv =  require("dotenv").config({path:"./.env"})

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    return res.status(200).json({
        "messege":"hello world",
        "instance": process.env.INSTANCE_ID // Add instance identifier
    });
});

app.get('/fibonacci/:n', (req, res) => {
    const n = req.params.n;
    console.log("n :" ,n);
    const ans = Fib(n);

    return res.status(200).json({
        "result":ans,
        "instance": process.env.INSTANCE_ID // Add instance identifier
    });
});

const Fib = (n)=>{
    if(n<2){
        return n;
    }
    return Fib(n-1)+Fib(n-2);
}

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))