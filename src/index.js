// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

let gameId = ''; // Store the ID of the game created by you.

// Function to display an error message in the DOM.
const displayErrorMessage = (message) => {
  const errorContainer = document.querySelector('.error-container');
  errorContainer.textContent = message;
};

// Function to create a new game and save gameId to local storage.
const createGame = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'Barcelona' }),
      },
    );
    const data = await response.json();
    const gameId = data.result.split(':')[1].trim();

    // Save gameId to local storage.
    localStorage.setItem('gameId', gameId);
  } catch (error) {
    displayErrorMessage(`Error creating game: ${error.message}`);
  }
};

// Function to load gameId from local storage on page load.
const loadGameIdFromLocalStorage = () => {
  const storedGameId = localStorage.getItem('gameId');
  if (storedGameId) {
    gameId = parseInt(storedGameId, 10); // Parse the stored value as an integer
  }
};

// Function to update the leaderboard on the webpage.
const updateLeaderboard = (leaderboard) => {
  const boardList = document.querySelector('.board-list');
  boardList.classList.add('board_list');

  // Clear the current leaderboard.
  boardList.innerHTML = '';

  // Sort the leaderboard based on scores in descending order.
  leaderboard.sort((a, b) => b.score - a.score);

  // Iterate through the leaderboard and create list items to display names and scores.
  leaderboard.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('scores-list');
    listItem.textContent = `${index + 1}. ${entry.user}: ${entry.score}`;
    boardList.appendChild(listItem);
  });
};

// Function to fetch scores for the game.
const fetchScores = async () => {
  if (!gameId) {
    return;
  }
  try {
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    );
    const data = await response.json();
    const leaderboard = data.result; // Store the leaderboard data.
    updateLeaderboard(leaderboard);
  } catch (error) {
    displayErrorMessage(`Error fetching scores: ${error.message}`);
  }
};

// Function to handle the form submission.
const handleSubmit = async (event) => {
  event.preventDefault();

  const nameInput = document.querySelector('.name-input');
  const scoreInput = document.querySelector('.scores-input');

  const name = nameInput.value;
  const score = parseInt(scoreInput.value, 10);

  // Validate input
  if (!name || Number.isNaN(score)) {
    displayErrorMessage('Ooops! Please enter a valid name and score.');
    return;
  }

  // Add the new score to the leaderboard on the server.
  try {
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: name, score }),
      },
    );

    if (response.ok) {
      // Refresh the leaderboard after submitting a score.
      fetchScores();
    } else {
      displayErrorMessage(`Error submitting score: ${response.statusText}`);
    }
  } catch (error) {
    displayErrorMessage(`Error submitting score: ${error.message}`);
  }

  // Clear the input fields.
  nameInput.value = '';
  scoreInput.value = '';
};

// Function to reload the page.
const reloadPage = () => {
  window.location.reload();
};

// Add an event listener for the form submission.
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', handleSubmit);

// Add an event listener for the "Refresh" button to reload the page.
const refreshButton = document.querySelector('.refresh-btn');
refreshButton.addEventListener('click', reloadPage);

// Load the leaderboard on page load.
window.addEventListener('load', async () => {
  // Load gameId from local storage.
  loadGameIdFromLocalStorage();

  if (!gameId) {
    // If gameId is not in local storage, create a new game.
    await createGame();
  }

  // Fetch scores after creating the game or loading from local storage.
  fetchScores();
});
