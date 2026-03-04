"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GreetCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('greet <name>')
            .description('Greet a user by name')
            .action((name) => this.greet(name));
    }
    greet(name) {
        console.log(`Hello, ${name}! Welcome to NinjaCLI 🥷`);
    }
}
module.exports = GreetCommand;
