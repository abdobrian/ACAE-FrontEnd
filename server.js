const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000);

app.get ('/*', (req,res)=>{

  var p = path.join(__dirname +'/dist/index.html');
  res.sendFile(p);
});

console.log('Console Listen');
