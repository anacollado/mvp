const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const router = require('./router.js');

app.use('/', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use('/api', router);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));