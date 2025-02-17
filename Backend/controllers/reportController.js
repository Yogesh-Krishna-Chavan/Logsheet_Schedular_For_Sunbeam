const db = require('../config/db');

exports.getReport = async (req, res) => {
    const { startDate, endDate, faculty_id, course_id } = req.query;
    
    let query = `SELECT logsheets.*, staff.name AS faculty_name, courses.course_name 
                 FROM logsheets
                 JOIN staff ON logsheets.faculty_id = staff.staff_id
                 JOIN courses ON logsheets.course_id = courses.course_id
                 WHERE 1`;
    let params = [];

    if (startDate && endDate) {
        query += ' AND logsheets.date BETWEEN ? AND ?';
        params.push(startDate, endDate);
    }
    if (faculty_id) {
        query += ' AND logsheets.faculty_id = ?';
        params.push(faculty_id);
    }
    if (course_id) {
        query += ' AND logsheets.course_id = ?';
        params.push(course_id);
    }

    try {
        const [report] = await db.execute(query, params);
        res.json(report);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
