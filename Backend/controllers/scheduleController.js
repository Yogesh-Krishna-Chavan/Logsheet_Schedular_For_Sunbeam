const db = require('../config/db');

exports.getSchedules = async (req, res) => {
    const [schedules] = await db.execute('SELECT * FROM schedules');
    res.json(schedules);
};
