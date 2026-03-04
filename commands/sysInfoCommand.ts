const os = require('os');

class SysInfoCommand {
    program;
    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('sysinfo')
            .description('Display system information')
            .action(() => this.showSysInfo());
    }

    showSysInfo() {
        const uptimeHours = (os.uptime() / 3600).toFixed(2);
        const totalMemGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
        const freeMemGB = (os.freemem() / (1024 ** 3)).toFixed(2);

        console.log(`\n💻 System Information:`);
        console.log(`   OS         : ${os.type()} ${os.release()}`);
        console.log(`   Platform   : ${os.platform()}`);
        console.log(`   Architecture: ${os.arch()}`);
        console.log(`   CPU        : ${os.cpus()[0].model}`);
        console.log(`   CPU Cores  : ${os.cpus().length}`);
        console.log(`   Total RAM  : ${totalMemGB} GB`);
        console.log(`   Free RAM   : ${freeMemGB} GB`);
        console.log(`   Uptime     : ${uptimeHours} hours`);
        console.log(`   Hostname   : ${os.hostname()}\n`);
    }
}

module.exports = SysInfoCommand;
export { };
