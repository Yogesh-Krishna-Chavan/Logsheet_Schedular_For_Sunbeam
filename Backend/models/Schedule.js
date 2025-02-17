const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Course = require("./courseModel");

const Schedule = sequelize.define("Schedule", {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    courseId: { 
        type: DataTypes.INTEGER,
        references: { model: Course, key: "id" },
        onDelete: "CASCADE",
    },
    date: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    topic: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }
}, { timestamps: true });

Course.hasMany(Schedule, { foreignKey: "courseId" });
Schedule.belongsTo(Course, { foreignKey: "courseId" });

module.exports = Schedule;
