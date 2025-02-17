const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Staff = sequelize.define("Staff", {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    email: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true,
        validate: { isEmail: true }
    },
    password: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    role: { 
        type: DataTypes.ENUM("admin", "staff", "coordinator"), 
        allowNull: false, 
        defaultValue: "staff" 
    }
}, { timestamps: true });

module.exports = Staff;
