import express from 'express';

const app = express();

app.get('/hello', (req, res) => res.send('Hello CDO!'));

app.listen(8000, () => console.log('listening on PORT 8000!'));