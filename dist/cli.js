#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Command } = require("commander");
const CLIEngine = require("./cli_engine/cli_engine");
const program = new Command();
program
    .name('mycli')
    .description('🥷 NinjaCLI - A custom CLI tool with useful commands')
    .version('1.0.0');
// Create the CLI engine and register all commands
const engine = new CLIEngine(program);
engine.registerAll();
program.parse();
