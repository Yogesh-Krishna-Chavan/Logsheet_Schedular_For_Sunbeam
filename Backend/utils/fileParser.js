const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const excelToJson = require("convert-excel-to-json");

/**
 * Parses CSV file and returns JSON data.
 * @param {string} filePath - Path to the uploaded CSV file.
 * @returns {Promise<Array>} Parsed JSON data.
 */
const parseCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (data) => results.push(data))
            .on("end", () => resolve(results))
            .on("error", (err) => reject(err));
    });
};

/**
 * Parses Excel (.xlsx) file and returns JSON data.
 * @param {string} filePath - Path to the uploaded Excel file.
 * @returns {Object} Parsed JSON data.
 */
const parseExcel = (filePath) => {
    const result = excelToJson({
        sourceFile: filePath,
        header: { rows: 1 }, // Treats the first row as headers
    });
    return result;
};

/**
 * Deletes an uploaded file from the server after processing.
 * @param {string} filePath - Path to the uploaded file.
 */
const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) console.error(`Error deleting file: ${filePath}`, err);
    });
};

module.exports = { parseCSV, parseExcel, deleteFile };
