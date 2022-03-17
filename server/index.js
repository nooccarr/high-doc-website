const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/contentItems', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, './sampleData/contentData.json'),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Sent: contentData.json');
      }
    }
  );
});

// app.get('*', (req, res) => {
//   res.sendFile(
//     path.join(__dirname, '/../client/dist/index.html'),
//     (err) => {
//       if (err) {
//         console.log(err)
//         res.sendStatus(500);
//       }
//     }
//   );
// });

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})