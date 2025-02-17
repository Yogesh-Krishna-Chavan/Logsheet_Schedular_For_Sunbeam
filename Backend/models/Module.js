const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Course = require("./courseModel");

const Module = sequelize.define("Module", {
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
    title: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    content: { 
        type: DataTypes.TEXT 
    }
}, { timestamps: true });

Course.hasMany(Module, { foreignKey: "courseId" });
Module.belongsTo(Course, { foreignKey: "courseId" });

module.exports = Module;
