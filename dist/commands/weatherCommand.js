"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
class WeatherCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('weather <city>')
            .description('Get current weather for a city')
            .action((city) => this.fetchWeather(city));
    }
    async fetchWeather(city) {
        try {
            const res = await axios.get(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
            const current = res.data.current_condition[0];
            console.log(`\n🌤️  Weather in ${city}`);
            console.log(`   Temperature : ${current.temp_C}°C / ${current.temp_F}°F`);
            console.log(`   Feels Like  : ${current.FeelsLikeC}°C`);
            console.log(`   Humidity    : ${current.humidity}%`);
            console.log(`   Wind Speed  : ${current.windspeedKmph} km/h`);
            console.log(`   Description : ${current.weatherDesc[0].value}\n`);
        }
        catch (err) {
            console.log(`❌ Error: Could not fetch weather for "${city}". ${err.message}`);
        }
    }
}
module.exports = WeatherCommand;
