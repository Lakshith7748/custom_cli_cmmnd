"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
class FileInfoCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('fileinfo <filename>')
            .description('Display information about a file')
            .action((filename) => this.showFileInfo(filename));
    }
    showFileInfo(filename) {
        const filePath = path.resolve(filename);
        if (!fs.existsSync(filePath)) {
            console.log(`❌ File not found: ${filePath}`);
            return;
        }
        const stats = fs.statSync(filePath);
        const ext = path.extname(filePath) || 'No extension';
        const sizeKB = (stats.size / 1024).toFixed(2);
        console.log(`\n📄 File Info: ${path.basename(filePath)}`);
        console.log(`   Path       : ${filePath}`);
        console.log(`   Extension  : ${ext}`);
        console.log(`   Size       : ${sizeKB} KB`);
        console.log(`   Created    : ${stats.birthtime.toLocaleString()}`);
        console.log(`   Modified   : ${stats.mtime.toLocaleString()}`);
        console.log(`   Is File    : ${stats.isFile()}`);
        console.log(`   Is Directory: ${stats.isDirectory()}\n`);
    }
}
module.exports = FileInfoCommand;
