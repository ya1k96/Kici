const express = require('express');

const app = express();

app.get('/', (req,res) => {
    return res.sendFile( __dirname +'/index.html');
});
app.use(express.static(__dirname + '/js'))

app.listen(process.env.PORT|| 3000, function(resp) {
    console.log("SERVER ON")
});
