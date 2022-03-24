const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

app.use(compression());
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

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})