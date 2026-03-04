"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GreetCommand = require('../commands/greetCommand');
const AddCommand = require('../commands/addCommand');
const FileInfoCommand = require('../commands/fileInfoCommand');
const GithubCommand = require('../commands/githubCommand');
const WeatherCommand = require('../commands/weatherCommand');
const QuoteCommand = require('../commands/quoteCommand');
const JokeCommand = require('../commands/jokeCommand');
const SysInfoCommand = require('../commands/sysInfoCommand');
const EncodeCommand = require('../commands/encodeCommand');
const DecodeCommand = require('../commands/decodeCommand');
const WordCountCommand = require('../commands/wordCountCommand');
class CLIEngine {
    constructor(program) {
        this.program = program;
        this.commands = [];
        this.loadCommands();
    }
    loadCommands() {
        // Create instances of all command classes
        this.commands = [
            new GreetCommand(this.program),
            new AddCommand(this.program),
            new FileInfoCommand(this.program),
            new GithubCommand(this.program),
            new WeatherCommand(this.program),
            new QuoteCommand(this.program),
            new JokeCommand(this.program),
            new SysInfoCommand(this.program),
            new EncodeCommand(this.program),
            new DecodeCommand(this.program),
            new WordCountCommand(this.program),
        ];
    }
    registerAll() {
        // Register each command with the Commander program
        this.commands.forEach((cmd) => cmd.register());
    }
    getCommandCount() {
        return this.commands.length;
    }
}
module.exports = CLIEngine;
