"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DecodeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('decode <text>')
            .description('Decode Base64 text back to plain text')
            .action((text) => this.decode(text));
    }
    decode(text) {
        try {
            const decoded = Buffer.from(text, 'base64').toString('utf-8');
            console.log(`\n🔓 Base64 Decoded:`);
            console.log(`   Input  : ${text}`);
            console.log(`   Output : ${decoded}\n`);
        }
        catch (err) {
            console.log(`❌ Error: Invalid Base64 string.`);
        }
    }
}
module.exports = DecodeCommand;
