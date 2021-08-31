const express = require('express');
const app = express();

app.get('/', (req, resp) => resp.send('Hello world!, Nyo here'));

app.listen(3000, () => console.log('App listening on port 3000'));