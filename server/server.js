const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// BODY PARSING (EXPRESS' BUILT IN PARSER)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// SERVING THE BUILD FILE
app.use('/build', express.static(path.join(__dirname, '../build')));

// SERVING THE MAIN PAGE
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// ROUTERS

// 404 NOT FOUND HANDLER
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(`${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} | server/err `, err);
  res.status(500).send('Internal Server Error');
});

// INITIALIZE SERVER
app.listen(PORT, () => {
  console.log(`${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}`, `Server listening on port ${PORT}...`);
});

module.exports = app;