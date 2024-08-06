---

# Battleship Game

As part of my self-guided education through The Odin Project's JavaScript Curriculum, I developed a Battleship project to practice the basics of testing using Jest. This project implements the classic game of Battleship using Test-Driven Development (TDD). By isolating the game logic from DOM manipulation, the application maintains a clear separation of concerns, making it easier to test and maintain. The project was built using JavaScript, Webpack, and SASS, ensuring a modern development workflow.

## Introduction

The Battleship game involves two players placing ships on a grid and taking turns to guess the location of each other's ships. The objective is to sink all of the opponent's ships before they sink yours.

This implementation focuses on following TDD principles, writing tests before implementing the actual functionality. The game logic is built incrementally by first writing a test, then implementing the code to make the test pass.

## Rules of the Game

1. **Setup**: Each player places a fleet of ships on their grid.
2. **Turns**: Players take turns guessing the coordinates of their opponent's ships.
3. **Hits and Misses**: If a player hits an opponent's ship, it’s marked as a hit. Otherwise, it's marked as a miss.
4. **Sinking Ships**: Once all coordinates of a ship have been hit, the ship is considered sunk.
5. **Winning the Game**: The first player to sink all of the opponent's ships wins the game.

For more detailed rules, you can refer to [Battleship's rules](https://en.wikipedia.org/wiki/Battleship_(game)) or play an [online version](https://battleship-game.org/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- Familiarity with JavaScript and TDD principles.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/battleship.git
   cd battleship
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Running Tests

Since this project follows the TDD approach, the tests are crucial for the development process.

To run the tests, use the following command:

```bash
npm test
```

Each test should correspond to a small piece of functionality. Write a test, implement the code to make it pass, then move on to the next piece of functionality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---