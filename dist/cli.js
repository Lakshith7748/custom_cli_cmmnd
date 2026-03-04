#!/usr/bin/env node
const axios = require("axios");
const { Command } = require("commander");
const inst = new Command(); // command is a class
// console.log(Object.getOwnPropertyNames(inst))
inst
    .command("greet <name>")
    .action((name) => console.log(`Hello ${name}`));
// inst.parse()
inst
    .command("add <n1> <n2>")
    .action((n1, n2) => console.log(Number(n1) + Number(n2)));
inst.command("ben10").action(async () => {
    try {
        const res = await axios.get(`https://ben10api.vercel.app`);
        console.log(res.aliens);
    }
    catch (err) {
        console.error("Error fetching Ben 10 data:", err.message);
    }
});
inst.parse();
