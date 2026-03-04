"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
class GithubCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('github <username>')
            .description('Fetch GitHub user profile information')
            .action((username) => this.fetchUser(username));
    }
    async fetchUser(username) {
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`);
            const user = res.data;
            console.log(`\n🐙 GitHub User: ${user.login}`);
            console.log(`   Name       : ${user.name || 'N/A'}`);
            console.log(`   Bio        : ${user.bio || 'N/A'}`);
            console.log(`   Public Repos: ${user.public_repos}`);
            console.log(`   Followers  : ${user.followers}`);
            console.log(`   Following  : ${user.following}`);
            console.log(`   Profile URL: ${user.html_url}\n`);
        }
        catch (err) {
            console.log(`❌ Error: Could not fetch GitHub user "${username}". ${err.message}`);
        }
    }
}
module.exports = GithubCommand;
