const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Course = require("./courseModel");

const Logsheet = sequelize.define("Logsheet", {
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
    staffName: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    date: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    hoursWorked: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    description: { 
        type: DataTypes.TEXT 
    }
}, { timestamps: true });

Course.hasMany(Logsheet, { foreignKey: "courseId" });
Logsheet.belongsTo(Course, { foreignKey: "courseId" });

module.exports = Logsheet;
