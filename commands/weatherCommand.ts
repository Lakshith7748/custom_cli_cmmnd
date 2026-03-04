const axios = require('axios');

class WeatherCommand {
    program;
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
            // Step 1: Geocode the city name to get lat/lon
            const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);

            if (!geoRes.data.results || geoRes.data.results.length === 0) {
                console.log(`❌ City "${city}" not found.`);
                return;
            }

            const { latitude, longitude, name, country } = geoRes.data.results[0];

            // Step 2: Fetch weather using lat/lon
            const weatherRes = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            );

            const weather = weatherRes.data.current_weather;

            const weatherCodes: Record<number, string> = {
                0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
                45: 'Foggy', 48: 'Rime fog', 51: 'Light drizzle', 53: 'Moderate drizzle',
                55: 'Dense drizzle', 61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
                71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow', 80: 'Slight rain showers',
                81: 'Moderate rain showers', 82: 'Violent rain showers', 95: 'Thunderstorm',
            };

            const description = weatherCodes[weather.weathercode] || 'Unknown';

            console.log(`\n🌤️  Weather in ${name}, ${country}`);
            console.log(`   Temperature : ${weather.temperature}°C`);
            console.log(`   Wind Speed  : ${weather.windspeed} km/h`);
            console.log(`   Description : ${description}\n`);
        } catch (err) {
            console.log(`❌ Error: Could not fetch weather for "${city}". ${err.message}`);
        }
    }
}

module.exports = WeatherCommand;
export { };
