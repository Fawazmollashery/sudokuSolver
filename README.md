Number Guessing Game - React + Vite



This is a simple and beautiful Number Guessing Game built with React and Vite. The game generates a random number between 1 and 100, and the player has to guess the correct number. After each guess, the game provides feedback on whether the guess is "too low" or "too high," and it tracks how many tries the player took to guess correctly.

Features

🎯 Random Number Generation: The app generates a random number between 1 and 100 at the start of the game.
📈 Feedback: After each guess, the app provides feedback on whether the guess is too low or too high.
📊 Track Tries: The app tracks how many guesses (tries) the player makes.
🔄 Play Again: After guessing the correct number, the player can click "Play Again" to reset the game and try again.
Tech Stack
React: For building the UI components and handling the logic.
Vite: As the build tool and development server, providing a fast development experience.
CSS: Custom styling for a clean and modern UI.
Getting Started
Follow these steps to set up and run the project locally:

1. Clone the Repository
bash
Copy code
git clone https://github.com/Fawazmollashery/number-guessing-game.git
cd number-guessing-game

2. Install Dependencies
Use npm or yarn to install the required packages:

bash
Copy code
npm install

3. Run the App
Start the development server:

bash
Copy code
npm run dev
This will launch the app on http://localhost:5173/. Open your browser and you can start playing the game!

4. Build for Production
To create a production build of the app:

bash
Copy code
npm run build
This will generate the optimized build in the dist folder.

Game Flow
Random Number Generation: At the start, the app generates a random number between 1 and 100. This number is stored in the component's state.
User Input: The player inputs a number and clicks the "Submit Guess" button.
Feedback:
If the guessed number is lower than the target, the app displays "📉 Too low! Try again."
If the guessed number is higher than the target, the app displays "📈 Too high! Try again."
If the guess is correct, the app displays "🎉 Correct!" and shows the number of tries the player took.
Play Again: After guessing the correct number, the player can reset the game by clicking the "Play Again" button, which reloads the page.
File Structure
bash
Copy code


number-guessing-game/
├── node_modules/          # Dependencies
├── public/                # Static files
├── src/
│   ├── App.jsx            # Main component with game logic
│   ├── App.css            # Custom styles for the app
│   └── main.jsx           # Entry point for the app
├── .gitignore             # Files to ignore in version control
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation



Future Enhancements
Add a timer: Track how long it takes for the player to guess the number.
Game difficulty levels: Add different difficulty modes (e.g., change the range of numbers).
Improved UI: Add animations and transitions to make the feedback more dynamic.
License
This project is licensed under the MIT License.