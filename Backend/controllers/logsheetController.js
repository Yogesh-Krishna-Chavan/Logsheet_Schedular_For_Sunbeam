const db = require('../config/db');

// Add Logsheet Entry
exports.addLogsheet = async (req, res) => {
    const {
        schedule_id,
        date,
        start_time,
        end_time,
        course_id,
        module_id,
        type,
        topics_taught,
        assignment_given,
        student_progress,
        faculty_id
    } = req.body;

    try {
        await db.execute(
            `INSERT INTO logsheets (schedule_id, date, start_time, end_time, course_id, module_id, type, topics_taught, assignment_given, student_progress, faculty_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [schedule_id, date, start_time, end_time, course_id, module_id, type, topics_taught, assignment_given, student_progress, faculty_id]
        );

        res.status(201).json({ message: 'Logsheet added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Logsheets (Filter by date, faculty, or course)
exports.getLogsheets = async (req, res) => {
    const { startDate, endDate, faculty_id, course_id } = req.query;
    let query = 'SELECT * FROM logsheets WHERE 1';
    let params = [];

    if (startDate && endDate) {
        query += ' AND date BETWEEN ? AND ?';
        params.push(startDate, endDate);
    }
    if (faculty_id) {
        query += ' AND faculty_id = ?';
        params.push(faculty_id);
    }
    if (course_id) {
        query += ' AND course_id = ?';
        params.push(course_id);
    }

    try {
        const [logsheets] = await db.execute(query, params);
        res.json(logsheets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
