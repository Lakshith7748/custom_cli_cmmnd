"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
class QuoteCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('quote')
            .description('Get a random inspirational quote')
            .action(() => this.fetchQuote());
    }
    async fetchQuote() {
        try {
            const res = await axios.get('https://dummyjson.com/quotes/random');
            const quote = res.data;
            console.log(`\n💬 Quote of the moment:`);
            console.log(`   "${quote.quote}"`);
            console.log(`   — ${quote.author}\n`);
        }
        catch (err) {
            console.log(`❌ Error: Could not fetch quote. ${err.message}`);
        }
    }
}
module.exports = QuoteCommand;
