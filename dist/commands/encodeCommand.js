"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EncodeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('encode <text>')
            .description('Encode text to Base64')
            .action((text) => this.encode(text));
    }
    encode(text) {
        const encoded = Buffer.from(text).toString('base64');
        console.log(`\n🔐 Base64 Encoded:`);
        console.log(`   Input  : ${text}`);
        console.log(`   Output : ${encoded}\n`);
    }
}
module.exports = EncodeCommand;
