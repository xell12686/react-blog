import express from 'express';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());

//routes
app.get('/hello', (req, res) => res.send('Hello CDO!'));
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));

app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));

app.listen(8000, () => console.log('listening on PORT 8000!'));