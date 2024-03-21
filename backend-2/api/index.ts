const express = require("express");
const app = express();

const mysql = require('mysql2');
const cors = require('cors');

const port = 3000; // Ensure this does not conflict with your React app's port

const pool = mysql.createPool({
  host: 'kaizen.cbywsos0s1nd.us-west-1.rds.amazonaws.com',
  user: 'boey',
  password: 'boeyeatskaizen',
  database: 'kaizen'
});

app.use(cors());

app.get('/', (req, res) => {
    pool.query('SELECT * FROM questions WHERE question_id = 1', (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }

      // Assuming only one row is returned, for a specific question
      if (results.length > 0) {
        const [content] = results;
        res.json({
          question: content.question,
          answers: [content.response_1, content.response_2, content.response_3, content.response_4]
        });
      } else {
        res.status(404).json({ message: "Content not found" });
      }
    });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;