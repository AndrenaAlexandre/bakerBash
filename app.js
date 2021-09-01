const express = require('express');

const app = express();
let port = 3000;

app.use(express.static('public'));  
app.set('view engine', 'ejs')
app.use(require('./routes/index'));


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})