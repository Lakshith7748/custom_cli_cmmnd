const axios = require('axios');

class JokeCommand {
    program;
    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('joke')
            .description('Get a random programming joke')
            .action(() => this.fetchJoke());
    }

    async fetchJoke() {
        try {
            const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
            const joke = res.data;

            console.log(`\n😂 Random Joke:`);
            console.log(`   ${joke.setup}`);
            console.log(`   ${joke.punchline}\n`);
        } catch (err) {
            console.log(`❌ Error: Could not fetch joke. ${err.message}`);
        }
    }
}

module.exports = JokeCommand;
export { };
