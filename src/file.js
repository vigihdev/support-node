'use strict';
// file.js
const path = require('node:path');
const fs = require('node:fs');

module.exports.File = {
    exist: function (filePath) {
        return fs.existsSync(filePath);
    },

    isFile: function (filePath) {
        return this.exist(filePath) && fs.statSync(filePath).isFile();
    },

    isDir: function (filePath) {
        return this.exist(filePath) && fs.statSync(filePath).isDirectory();
    },

    get: function (filePath) {
        if (!this.isFile(filePath)) {
            throw new Error(`File ${filePath} does not exist or is not a file`);
        }

        try {
            return fs.readFileSync(filePath, 'utf8');
        } catch (error) {
            throw new Error(`Error reading file ${filePath}: ${error.message}`);
        }
    },

    put: function (filePath, content, overwrite = true) {
        if (!this.isFile(filePath)) {
            throw new Error(`File ${filePath} does not exist or is not a file`);
        }

        if (!overwrite && this.exist(filePath)) {
            throw new Error(`File ${filePath} already exists`);
        }

        try {
            fs.writeFileSync(filePath, content, 'utf8');
        } catch (error) {
            throw new Error(`Error writing file ${filePath}: ${error.message}`);
        }
    },
}