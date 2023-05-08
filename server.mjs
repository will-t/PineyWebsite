import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.post('/api/hello', (req, res) => {
  const text = req.body.text;
  const responseText = text + ' Hello world!';
  res.send({ text: responseText });
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
  
});