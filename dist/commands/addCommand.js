"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('add <n1> <n2>')
            .description('Add two numbers together')
            .action((n1, n2) => this.add(n1, n2));
    }
    add(n1, n2) {
        console.log(`Result: ${Number(n1) + Number(n2)}`);
    }
}
module.exports = AddCommand;
