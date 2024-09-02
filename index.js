const express = Require('express')
const port = 4000;
const app=express();
app.get('/',(req,res) => res.send('<h1> Hello World! hi</h1>'));
app.listen(port, () => console.log('app is up run on port: ${port}') )
