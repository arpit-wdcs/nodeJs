const express = require('express');
const app = express();

app.get('/',(req,res) =>  {
    console.log("hello arpit")
    var Web3 = require('web3');
    var web3 = new Web3('ws://localhost:8546');
  

})

const port = process.env.PORT || 3000
console.log('EllllllNV PORT', process.env.PORT)


app.listen(port,() => console.log(`listning on port  ${port} `))
