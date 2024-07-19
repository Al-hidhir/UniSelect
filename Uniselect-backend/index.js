const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;
const secretKey = 'uni';

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Middleware to verify JWT token
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1]; 
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); 
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Routes for Universities
app.get('/api/universities', authenticateJWT, (req, res) => {
  const sql = 'SELECT * FROM universities';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' });
    res.json(results);
  });
});

app.post('/api/universities', authenticateJWT, (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'University name is required' });
  
  const sql = 'INSERT INTO universities (name) VALUES (?)';
  db.query(sql, [name], (err, result) => {
    if (err) return res.status(400).json({ error: 'Failed to add university' });
    res.json({ message: 'University added successfully', id: result.insertId });
  });
});

app.delete('/api/universities/:id', authenticateJWT, (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'University ID is required' });

  const sql = 'DELETE FROM universities WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to delete university' });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'University not found' });
    res.json({ message: 'University deleted successfully' });
  });
});

// Routes for Courses
app.get('/api/courses', authenticateJWT, (req, res) => {
  const sql = 'SELECT * FROM courses';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' });
    res.json(results);
  });
});

app.post('/api/courses', authenticateJWT, (req, res) => {
  const { name, university_id } = req.body;
  if (!name || !university_id) return res.status(400).json({ error: 'Course name and university ID are required' });

  const sql = 'INSERT INTO courses (name, university_id) VALUES (?, ?)';
  db.query(sql, [name, university_id], (err, result) => {
    if (err) return res.status(400).json({ error: 'Failed to add course' });
    res.json({ message: 'Course added successfully', id: result.insertId });
  });
});

app.delete('/api/courses/:id', authenticateJWT, (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Course ID is required' });

  const sql = 'DELETE FROM courses WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to delete course' });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course deleted successfully' });
  });
});

// User login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = results[0];
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  });
});

// Routes for Users
app.post('/api/users/register', (req, res) => {
  const { firstName, lastName, address, username, password, email } = req.body;
  if (!firstName || !lastName || !address || !username || !password || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const role = 'ROLE_USER'; // Assuming a default role
  const sql = 'INSERT INTO users (firstName, lastName, address, username, password, role, email) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, address, username, hashedPassword, role, email], (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      return res.status(400).json({ error: 'Failed to register user' });
    }
    res.json({ message: 'User registered successfully', id: result.insertId });
  });
});

app.get('/api/users', authenticateJWT, (req, res) => {
  const sql = 'SELECT id, username, email, role FROM users';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' });
    res.json(results);
  });
});

app.delete('/api/users/:id', authenticateJWT, (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'User ID is required' });

  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to delete user' });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
