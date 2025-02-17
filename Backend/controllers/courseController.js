const db = require('../config/db');

exports.getCourses = async (req, res) => {
    const [courses] = await db.execute('SELECT * FROM courses');
    res.json(courses);
};
