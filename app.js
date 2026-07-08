const express = require('express');
const app = express();
app.use(express.json());
app.post('/api/chat', (req, res) => {
  const prompt = req.body.prompt;
  if (prompt) res.json({ message: "Mock: " + prompt });
  else res.status(500).send("No prompt");
});
app.listen(3000);