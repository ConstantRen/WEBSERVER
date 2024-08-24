const express = require('express');
const app = express();
const port = 3000;

var students = [
    {
        "name": 'Talens, Isaiah',
        "studno": '12345' 
    },
    {
        "name": 'Manalo, Jimwell',
        "studno": '24680' 
    }
];

app.get('/', (req, res) => {
  res.writeHead(200,{'Content-Type':'application/json'});
  res.write(JSON.stringify(students));
  res.end();
});
app.get('/student', (req, res) => {
  
});
app.get('/add', (req, res) => {
  
});
app.post('/create', (req, res) => {
  
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
