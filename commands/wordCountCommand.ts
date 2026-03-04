class WordCountCommand {
    program;
    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('wordcount <text>')
            .description('Count words, characters, and lines in text')
            .action((text) => this.countWords(text));
    }

    countWords(text) {
        const words = text.trim().split(/\s+/).length;
        const characters = text.length;
        const vowels = (text.match(/[aeiouAEIOU]/g) || []).length;

        console.log(`\n📝 Word Count:`);
        console.log(`   Text       : "${text}"`);
        console.log(`   Words      : ${words}`);
        console.log(`   Characters : ${characters}`);
        console.log(`   Vowels     : ${vowels}\n`);
    }
}

module.exports = WordCountCommand;
export { };
