const express = require('express');
const mysql = require('mysql2');

const cors = require('cors');

const app = express();
const port = 3001; // Ensure this does not conflict with your React app's port

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kaizen_questions_and_answers'
});

app.use(cors());

app.get('/api/explanation-content', (req, res) => {
    pool.query('SELECT * FROM given_questions_and_responses WHERE id = 3', (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      // Assuming only one row is returned, for a specific question
      if (results.length > 0) {
        const [content] = results;
        res.json({
          question: content.Question,
          answers: [content.Answer_1, content.Answer_2, content.Answer_3, content.Answer_4]
        });
      } else {
        res.status(404).json({ message: "Content not found" });
      }
    });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

