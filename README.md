# 🥷 NinjaCLI

A fully functional custom CLI tool built with **Node.js + TypeScript** using **Object-Oriented Programming** principles. Features 11 custom commands including 3 API integrations.

---

## 📁 Project Structure

```
ninja_cli/
├── cli.ts                        # Entry point (creates Commander program)
├── cli_engine/
│   └── cli_engine.ts             # CLIEngine class (registers all commands)
├── commands/
│   ├── addCommand.ts             # Add two numbers
│   ├── greetCommand.ts           # Greet a user
│   ├── fileInfoCommand.ts        # Display file information
│   ├── githubCommand.ts          # 🌐 GitHub user info (API)
│   ├── weatherCommand.ts         # 🌐 Weather info (API)
│   ├── quoteCommand.ts           # 🌐 Random quote (API)
│   ├── jokeCommand.ts            # Random joke
│   ├── sysInfoCommand.ts         # System information
│   ├── encodeCommand.ts          # Base64 encode
│   ├── decodeCommand.ts          # Base64 decode
│   └── wordCountCommand.ts       # Word/character counter
├── dist/                         # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Setup Instructions

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd ninja_cli
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Compile TypeScript**
   ```bash
   npx tsc
   ```

4. **Run the CLI**
   ```bash
   node dist/cli.js <command> [arguments]
   ```

5. **(Optional) Link globally**
   ```bash
   npm link
   mycli <command> [arguments]
   ```

---

## 🧱 OOP Architecture

The project follows **Object-Oriented Programming** principles:

- **Each command is a class** with a constructor, `register()` method, and action methods
- **CLIEngine class** manages all command instances (object creation & usage)
- **Constructor injection** — Commander `program` is passed to each command via constructor
- **Encapsulation** — each command encapsulates its own logic
- **Single Responsibility** — each class handles one command

### Class Hierarchy

```
Command (pattern)
├── constructor(program)     → stores Commander program reference
├── register()               → registers command with Commander
└── actionMethod()           → handles the command logic

CLIEngine
├── constructor(program)     → creates all command objects
├── loadCommands()           → instantiates command classes
├── registerAll()            → calls register() on each command
└── getCommandCount()        → returns total number of commands
```

---

## 📋 Available Commands (11 Total)

| # | Command | Description | Type |
|---|---------|-------------|------|
| 1 | `mycli greet <name>` | Greet a user by name | Local |
| 2 | `mycli add <n1> <n2>` | Add two numbers | Local |
| 3 | `mycli fileinfo <filename>` | Display file information | Local |
| 4 | `mycli github <username>` | Fetch GitHub user profile | 🌐 API |
| 5 | `mycli weather <city>` | Get current weather | 🌐 API |
| 6 | `mycli quote` | Get a random inspirational quote | 🌐 API |
| 7 | `mycli joke` | Get a random joke | 🌐 API |
| 8 | `mycli sysinfo` | Display system information | Local |
| 9 | `mycli encode <text>` | Encode text to Base64 | Local |
| 10 | `mycli decode <text>` | Decode Base64 to plain text | Local |
| 11 | `mycli wordcount <text>` | Count words, characters & vowels | Local |

---

## 💡 Example Usage

### Basic Commands
```bash
# Greet a user
$ mycli greet Lakshith
Hello, Lakshith! Welcome to NinjaCLI 🥷

# Add two numbers
$ mycli add 5 3
Result: 8

# Get file information
$ mycli fileinfo package.json
📄 File Info: package.json
   Path       : /path/to/package.json
   Extension  : .json
   Size       : 0.49 KB
   Created    : 2/26/2026, 9:15:27 AM
   Modified   : 3/4/2026, 11:05:15 PM
   Is File    : true
   Is Directory: false

# System information
$ mycli sysinfo
💻 System Information:
   OS         : Darwin 24.6.0
   Platform   : darwin
   Architecture: arm64
   CPU        : Apple M3
   CPU Cores  : 8
   Total RAM  : 8.00 GB
   Free RAM   : 0.06 GB
   Uptime     : 2650.94 hours
   Hostname   : Achutas-MacBook-Pro.local
```

### Encoding / Decoding
```bash
# Encode text to Base64
$ mycli encode "Hello World"
🔐 Base64 Encoded:
   Input  : Hello World
   Output : SGVsbG8gV29ybGQ=

# Decode Base64 to text
$ mycli decode "SGVsbG8gV29ybGQ="
🔓 Base64 Decoded:
   Input  : SGVsbG8gV29ybGQ=
   Output : Hello World
```

### Word Count
```bash
$ mycli wordcount "Hello World from NinjaCLI"
📝 Word Count:
   Text       : "Hello World from NinjaCLI"
   Words      : 4
   Characters : 25
   Vowels     : 7
```

### 🌐 API Commands
```bash
# GitHub user info
$ mycli github torvalds
🐙 GitHub User: torvalds
   Name       : Linus Torvalds
   Bio        : N/A
   Public Repos: 11
   Followers  : 288569
   Following  : 0
   Profile URL: https://github.com/torvalds

# Get weather
$ mycli weather London
🌤️  Weather in London
   Temperature : 12°C / 54°F
   Feels Like  : 10°C
   Humidity    : 72%
   Wind Speed  : 15 km/h
   Description : Partly cloudy

# Random quote
$ mycli quote
💬 Quote of the moment:
   "Its good to leave each day behind, like flowing water..."
   — Rumi

# Random joke
$ mycli joke
😂 Random Joke:
   Why do programmers prefer dark mode?
   Because light attracts bugs!
```

---

## 🌐 APIs Used

| API | URL | Purpose |
|-----|-----|---------|
| GitHub API | `https://api.github.com/users/:username` | Fetch public GitHub user profiles |
| wttr.in | `https://wttr.in/:city?format=j1` | Get current weather data |
| DummyJSON Quotes | `https://dummyjson.com/quotes/random` | Random inspirational quotes |
| Official Joke API | `https://official-joke-api.appspot.com/random_joke` | Random jokes |

> **Note:** All APIs used are free and do not require API keys.

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `commander` | CLI framework for argument parsing |
| `axios` | HTTP client for API requests |
| `chalk` | Terminal string styling |
| `typescript` | TypeScript compiler |
| `ts-node` | TypeScript execution engine |
| `@types/node` | Node.js type definitions |

---

## 📄 License

ISC
