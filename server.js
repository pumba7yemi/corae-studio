
// server.js (Express server for analytics)
const express = require('express');
const app = express();
app.use(express.json());
app.post('/analytics', (req, res) => {
  console.log('Analytics Event:', req.body);
  res.sendStatus(200);
});
app.listen(3001, () => console.log('Analytics server running on port 3001'));
