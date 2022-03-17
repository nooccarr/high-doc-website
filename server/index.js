const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('client/dist'));

app.get('/contentItems', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, './sampleData/contentData.json'),
    (err) => { if (err) console.log(err) }
  );
});

app.get('*', (req, res)=> {
  res.sendFile(path.resolve('client', 'dist', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})