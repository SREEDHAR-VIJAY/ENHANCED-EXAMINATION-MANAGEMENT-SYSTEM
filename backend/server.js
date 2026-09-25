const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// --- Database Connection ---
// Replace the password and user with your MySQL credentials
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// --- API Endpoints ---

// 1. Add Student
app.post('/api/students', (req, res) => {
    const { name, dept, semester } = req.body;
    const query = 'INSERT INTO students (name, dept, semester) VALUES (?, ?, ?)';
    db.query(query, [name, dept, semester], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Student added successfully', student_id: result.insertId });
    });
});

// 2. Get Students
app.get('/api/students', (req, res) => {
    const query = 'SELECT * FROM students';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// 3. Add Subject
app.post('/api/subjects', (req, res) => {
    const { subject_name, credits } = req.body;
    const query = 'INSERT INTO subjects (subject_name, credits) VALUES (?, ?)';
    db.query(query, [subject_name, credits], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Subject added successfully', subject_id: result.insertId });
    });
});

// 4. Get Subjects
app.get('/api/subjects', (req, res) => {
    const query = 'SELECT * FROM subjects';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// 5. Add Exam
app.post('/api/exams', (req, res) => {
    const { subject_id, date, type } = req.body;
    const query = 'INSERT INTO exams (subject_id, date, type) VALUES (?, ?, ?)';
    db.query(query, [subject_id, date, type], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Exam added successfully', exam_id: result.insertId });
    });
});

// 6. Add Internal Marks
app.post('/api/internal_marks', (req, res) => {
    const { student_id, subject_id, marks } = req.body;
    const query = 'INSERT INTO internal_marks (student_id, subject_id, marks) VALUES (?, ?, ?)';
    db.query(query, [student_id, subject_id, marks], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Internal marks added successfully' });
    });
});

// 7. Calculate and Add Final Result (Example Logic)
// For simplicity, we assume result = internal marks directly or combined logic
app.post('/api/calculate_result', (req, res) => {
    const { student_id, subject_id } = req.body;
    
    // Fetch internal marks
    const markQuery = 'SELECT marks FROM internal_marks WHERE student_id = ? AND subject_id = ? LIMIT 1';
    db.query(markQuery, [student_id, subject_id], (err, marksResult) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (marksResult.length === 0) {
            return res.status(404).json({ error: 'Internal marks not found for this student/subject' });
        }
        
        const total_marks = marksResult[0].marks;
        let grade = 'F';
        if (total_marks >= 90) grade = 'S';
        else if (total_marks >= 80) grade = 'A';
        else if (total_marks >= 70) grade = 'B';
        else if (total_marks >= 60) grade = 'C';
        else if (total_marks >= 50) grade = 'D';
        else if (total_marks >= 40) grade = 'E';
        
        const resultQuery = 'INSERT INTO results (student_id, subject_id, total_marks, grade) VALUES (?, ?, ?, ?)';
        db.query(resultQuery, [student_id, subject_id, total_marks, grade], (err, insertResult) => {
             if (err) return res.status(500).json({ error: err.message });
             res.status(201).json({ message: 'Result generated successfully', total_marks, grade });
        });
    });
});

// 8. Get Results with Student and Subject Detials
app.get('/api/results', (req, res) => {
    const query = `
        SELECT r.result_id, s.name as student_name, sub.subject_name, r.total_marks, r.grade
        FROM results r
        JOIN students s ON r.student_id = s.student_id
        JOIN subjects sub ON r.subject_id = sub.subject_id
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


