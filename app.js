// Values with descriptions from values.txt
const allValues = [
    { name: "ACCEPTANCE", description: "to be accepted as I am" },
    { name: "ACHIEVEMENT", description: "to have important accomplishments" },
    { name: "ART", description: "to appreciate or express myself in art" },
    { name: "AUTHORITY", description: "to be in charge of others" },
    { name: "BEAUTY", description: "to appreciate beauty around me" },
    { name: "ACCURACY", description: "to be correct in my opinions and beliefs" },
    { name: "ADVENTURE", description: "to have new and exciting experiences" },
    { name: "ATTRACTIVENESS", description: "to be physically attractive" },
    { name: "AUTONOMY", description: "to be self-determined and independent" },
    { name: "BELONGING", description: "to have a sense of belonging, being part of" },
    { name: "CARING", description: "to take care of others" },
    { name: "COMFORT", description: "to have a pleasant and comfortable life" },
    { name: "COMPASSION", description: "to feel and act on concern for others" },
    { name: "COMPROMISE", description: "to be willing to give and take in reaching agreements" },
    { name: "COOPERATION", description: "to work collaboratively with others" },
    { name: "CHALLENGE", description: "to take on difficult tasks and problems" },
    { name: "COMMITMENT", description: "to make enduring, meaningful commitments" },
    { name: "COMPLEXITY", description: "to embrace the intricacies of life" },
    { name: "CONTRIBUTION", description: "to make a lasting contribution in the world" },
    { name: "COURAGE", description: "to be brave and strong in the face of adversity" },
    { name: "COURTESY", description: "to be considerate and polite toward others" },
    { name: "CREATIVITY", description: "to create new things or ideas" },
    { name: "CURIOSITY", description: "to seek out, experience, and learn new things" },
    { name: "DEPENDABILITY", description: "to be reliable and trustworthy" },
    { name: "DILIGENCE", description: "to be thorough and conscientious in whatever I do" },
    { name: "ECOLOGY", description: "to live in harmony with the environment" },
    { name: "FAITHFULNESS", description: "to be loyal and true in relationships" },
    { name: "DUTY", description: "to carry out my duties and obligations" },
    { name: "EXCITEMENT", description: "to have a life full of thrills and stimulation" },
    { name: "FAME", description: "to be known and recognized" },
    { name: "FAMILY", description: "to have a happy, loving family" },
    { name: "FITNESS", description: "to be physically fit and strong" },
    { name: "FLEXIBILITY", description: "to adjust to new circumstances easily" },
    { name: "FORGIVENESS", description: "to be forgiving of others" },
    { name: "FREEDOM", description: "to be free from undue restrictions and limitations" },
    { name: "FRIENDSHIP", description: "to have close, supportive friends" },
    { name: "FUN", description: "to play and have fun" },
    { name: "GENEROSITY", description: "to give what I have to others" },
    { name: "GENUINENESS", description: "to act in a manner that is true to who I am" },
    { name: "GOD'S WILL", description: "to seek and obey the will of God" },
    { name: "GRATITUDE", description: "to be thankful and appreciative" },
    { name: "GROWTH", description: "to keep changing and growing" },
    { name: "HEALTH", description: "to be physically well and healthy" },
    { name: "HONESTY", description: "to be honest and truthful" },
    { name: "HOPE", description: "to maintain a positive and optimistic outlook" },
    { name: "HUMILITY", description: "to be modest and unassuming" },
    { name: "HUMOR", description: "to see the humorous side of myself and the world" },
    { name: "IMAGINATION", description: "to have dreams and see possibilities" },
    { name: "INDEPENDENCE", description: "to be free from depending on others" },
    { name: "INDUSTRY", description: "to work hard and well at my life tasks" },
    { name: "INNER PEACE", description: "to experience personal peace" },
    { name: "INTEGRITY", description: "to live my daily life in a way that is consistent with my values" },
    { name: "INTELLIGENCE", description: "to keep my mind sharp and active" },
    { name: "INTIMACY", description: "to share my innermost experiences with others" },
    { name: "JUSTICE", description: "to promote fair and equal treatment for all" },
    { name: "KNOWLEDGE", description: "to learn and contribute valuable knowledge" },
    { name: "LEADERSHIP", description: "to inspire and guide others" },
    { name: "LEISURE", description: "to take time to relax and enjoy" },
    { name: "LOVED", description: "to be loved by those close to me" },
    { name: "LOVING", description: "to give love to others" },
    { name: "MASTERY", description: "to be competent in my everyday activities" },
    { name: "MINDFULNESS", description: "to live conscious and mindful of the present moment" },
    { name: "MODERATION", description: "to avoid excesses and find a middle ground" },
    { name: "MONOGAMY", description: "to have one close, loving relationship" },
    { name: "MUSIC", description: "to enjoy or express myself in music" },
    { name: "NON-CONFORMITY", description: "to question and challenge authority and norms" },
    { name: "NOVELTY", description: "to have a life full of change and variety" },
    { name: "OPENNESS", description: "to be open to new experiences, ideas, and options" },
    { name: "NURTURANCE", description: "to encourage and support others" },
    { name: "ORDER", description: "to have a life that is well-ordered and organized" },
    { name: "PASSION", description: "to have deep feelings about ideas, activities, or people" },
    { name: "PLEASURE", description: "to feel good" },
    { name: "POWER", description: "to have control over others" },
    { name: "PROTECT", description: "to protect and keep safe those I love" },
    { name: "PURPOSE", description: "to have meaning and direction in my life" },
    { name: "PATRIOTISM", description: "to love, serve, and protect my country" },
    { name: "POPULARITY", description: "to be well-liked by many people" },
    { name: "PRACTICALITY", description: "to focus on what is practical, prudent, and sensible" },
    { name: "PROVIDE", description: "to provide for and take care of my family" },
    { name: "RATIONALITY", description: "to be guided by reason, logic, and evidence" },
    { name: "REALISM", description: "to see and act realistically and practically" },
    { name: "RESPONSIBILITY", description: "to make and carry out responsible decisions" },
    { name: "RISK", description: "to take risks and chances" },
    { name: "ROMANCE", description: "to have intense, exciting love in my life" },
    { name: "SAFETY", description: "to be safe and secure" },
    { name: "SELF-ACCEPTANCE", description: "to accept myself as I am" },
    { name: "SELF-CONTROL", description: "to be disciplined in my own actions" },
    { name: "SELF-ESTEEM", description: "to feel good about myself" },
    { name: "SELF-KNOWLEDGE", description: "to have a deep and honest understanding of myself" },
    { name: "SERVICE", description: "to be helpful and of service to others" },
    { name: "SEXUALITY", description: "to have an active and satisfying sex life" },
    { name: "SOLITUDE", description: "to have time and space where I can be apart from others" },
    { name: "STABILITY", description: "to have a life that stays fairly consistent" },
    { name: "TRADITION", description: "to follow respected patterns of the past" },
    { name: "WEALTH", description: "to have plenty of money" },
    { name: "SIMPLICITY", description: "to live life simply, with minimal needs" },
    { name: "SPIRITUALITY", description: "to grow and mature spiritually" },
    { name: "TOLERANCE", description: "to accept and respect those who differ from me" },
    { name: "VIRTUE", description: "to live a morally pure and excellent life" },
    { name: "WORLD PEACE", description: "to work to promote peace in the world" }
];

// Game state
let gameState = {
    userName: '',
    currentValues: [],
    winners: [],
    losers: [],
    currentRound: 1,
    currentPairIndex: 0,
    bothCount: 0,
    maxBothCount: 0,
    pairs: [],
    roundProgress: 0,
    totalPairs: 0
};

// Debounce flag
let isTransitioning = false;

// DOM elements
const startScreen = document.getElementById('startScreen');
const evaluationScreen = document.getElementById('evaluationScreen');
const resultsScreen = document.getElementById('resultsScreen');
const userNameInput = document.getElementById('userName');
const startButton = document.getElementById('startButton');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const description1 = document.getElementById('description1');
const description2 = document.getElementById('description2');
const bothButton = document.getElementById('bothButton');
const bothButtonCount = document.getElementById('bothButtonCount');
const progressFill = document.getElementById('progressFill');
const resultName = document.getElementById('resultName');
const valuesList = document.getElementById('valuesList');
const restartButton = document.getElementById('restartButton');
const resetButtonGame = document.getElementById('resetButtonGame');
const skipToEndButton = document.getElementById('skipToEndButton');
const screenshotButton = document.getElementById('screenshotButton');

// Initialize
function init() {
    loadGameState();
    attachEventListeners();
}

// Event listeners
function attachEventListeners() {
    startButton.addEventListener('click', startGame);
    card1.addEventListener('click', () => selectValue(0));
    card2.addEventListener('click', () => selectValue(1));
    bothButton.addEventListener('click', selectBoth);
    restartButton.addEventListener('click', () => {
        if (confirm('Are you sure? You will lose your current values.')) {
            resetGame();
        }
    });
    resetButtonGame.addEventListener('click', () => {
        if (confirm('Are you sure you want to start over? Your progress will be lost.')) {
            resetGame();
        }
    });
    skipToEndButton.addEventListener('click', skipToEnd);
    screenshotButton.addEventListener('click', takeScreenshot);
}

// Start game
function startGame() {
    const name = userNameInput.value.trim();
    if (!name) {
        alert('Please enter your name');
        return;
    }
    
    gameState.userName = name;
    gameState.currentValues = [...allValues];
    shuffleArray(gameState.currentValues);
    gameState.winners = [];
    gameState.losers = [];
    gameState.currentRound = 1;
    
    startNewRound();
    
    startScreen.classList.add('hidden');
    evaluationScreen.classList.remove('hidden');
}

// Start new round
function startNewRound() {
    // Calculate both count (10% rounded up)
    gameState.maxBothCount = Math.ceil(gameState.currentValues.length * 0.1);
    gameState.bothCount = gameState.maxBothCount;
    
    // Create pairs
    gameState.pairs = [];
    const shuffled = [...gameState.currentValues];
    shuffleArray(shuffled);
    
    for (let i = 0; i < shuffled.length - 1; i += 2) {
        gameState.pairs.push([shuffled[i], shuffled[i + 1]]);
    }
    
    // Handle odd number of values
    if (shuffled.length % 2 === 1) {
        // Add a loser from previous round if available
        if (gameState.losers.length > 0) {
            const randomLoser = gameState.losers.splice(Math.floor(Math.random() * gameState.losers.length), 1)[0];
            gameState.pairs.push([shuffled[shuffled.length - 1], randomLoser]);
        } else {
            // If no losers available, the odd one out automatically wins
            gameState.winners.push(shuffled[shuffled.length - 1]);
        }
    }
    
    gameState.currentPairIndex = 0;
    gameState.totalPairs = gameState.pairs.length;
    gameState.roundProgress = 0;
    
    updateDisplay();
    showNextPair();
}

// Show next pair
function showNextPair() {
    if (gameState.currentPairIndex >= gameState.pairs.length) {
        endRound();
        return;
    }
    
    // Add fade-out effect
    card1.classList.add('card-transition');
    card2.classList.add('card-transition');
    
    setTimeout(() => {
        const pair = gameState.pairs[gameState.currentPairIndex];
        value1.textContent = pair[0].name;
        value2.textContent = pair[1].name;
        description1.textContent = pair[0].description;
        description2.textContent = pair[1].description;
        
        gameState.roundProgress = gameState.currentPairIndex + 1;
        updateDisplay();
        
        // Remove transition class and re-enable
        card1.classList.remove('card-transition');
        card2.classList.remove('card-transition');
        isTransitioning = false;
        
        saveGameState();
    }, 350);
}

// Select a value
function selectValue(index) {
    // Prevent double-clicks
    if (isTransitioning) return;
    isTransitioning = true;
    
    const pair = gameState.pairs[gameState.currentPairIndex];
    
    // Visual feedback - highlight selected card
    if (index === 0) {
        card1.classList.add('card-selected');
    } else {
        card2.classList.add('card-selected');
    }
    
    // Store the selection
    gameState.winners.push(pair[index]);
    gameState.losers.push(pair[1 - index]);
    gameState.currentPairIndex++;
    
    // Delay before showing next pair
    setTimeout(() => {
        card1.classList.remove('card-selected');
        card2.classList.remove('card-selected');
        showNextPair();
    }, 450);
}

// Select both values
function selectBoth() {
    // Prevent double-clicks
    if (isTransitioning || gameState.bothCount <= 0) return;
    isTransitioning = true;
    
    const pair = gameState.pairs[gameState.currentPairIndex];
    
    // Visual feedback - highlight both cards and button
    card1.classList.add('card-selected');
    card2.classList.add('card-selected');
    bothButton.classList.add('both-button-selected');
    
    // Store both selections
    gameState.winners.push(pair[0]);
    gameState.winners.push(pair[1]);
    gameState.bothCount--;
    gameState.currentPairIndex++;
    
    // Delay before showing next pair
    setTimeout(() => {
        card1.classList.remove('card-selected');
        card2.classList.remove('card-selected');
        bothButton.classList.remove('both-button-selected');
        showNextPair();
    }, 450);
}

// End round
function endRound() {
    gameState.currentValues = gameState.winners;
    gameState.winners = [];
    
    // Check ending conditions
    if (gameState.currentValues.length <= 10) {
        showResults();
    } else if (gameState.currentValues.length <= 16) {
        // Add enough losers to get to 16
        const needed = 16 - gameState.currentValues.length;
        for (let i = 0; i < needed && gameState.losers.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * gameState.losers.length);
            gameState.currentValues.push(gameState.losers.splice(randomIndex, 1)[0]);
        }
        gameState.currentRound++;
        startNewRound();
    } else {
        gameState.currentRound++;
        startNewRound();
    }
}

// Update display
function updateDisplay() {
    bothButtonCount.textContent = gameState.bothCount;
    
    // Update progress bar
    const progress = (gameState.roundProgress / gameState.totalPairs) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Disable both button if no more uses
    bothButton.disabled = gameState.bothCount <= 0;
}

// Show results
function showResults() {
    startScreen.classList.add('hidden');
    evaluationScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    resultName.textContent = `${gameState.userName}'s Core Values`;
    
    valuesList.innerHTML = '';
    gameState.currentValues.forEach(value => {
        const valueItem = document.createElement('div');
        valueItem.className = 'value-item';
        valueItem.innerHTML = `
            <div class="value-name">${value.name}</div>
            <div class="value-desc">${value.description}</div>
        `;
        valuesList.appendChild(valueItem);
    });
    
    // Save completed state separately
    localStorage.setItem('valueTournamentCompleted', JSON.stringify({
        userName: gameState.userName,
        finalValues: gameState.currentValues
    }));
    
    // Clear the in-progress game state
    localStorage.removeItem('valueTournamentState');
}

// Reset game
function resetGame() {
    localStorage.removeItem('valueTournamentState');
    localStorage.removeItem('valueTournamentCompleted');
    gameState = {
        userName: '',
        currentValues: [],
        winners: [],
        losers: [],
        currentRound: 1,
        currentPairIndex: 0,
        bothCount: 0,
        maxBothCount: 0,
        pairs: [],
        roundProgress: 0,
        totalPairs: 0
    };
    
    userNameInput.value = '';
    resultsScreen.classList.add('hidden');
    evaluationScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Save game state
function saveGameState() {
    localStorage.setItem('valueTournamentState', JSON.stringify(gameState));
}

// Load game state
function loadGameState() {
    const saved = localStorage.getItem('valueTournamentState');
    if (saved) {
        gameState = JSON.parse(saved);
        
        // Check if game was completed (stored in a separate key)
        if (localStorage.getItem('valueTournamentCompleted')) {
            const completedData = JSON.parse(localStorage.getItem('valueTournamentCompleted'));
            gameState.userName = completedData.userName;
            gameState.currentValues = completedData.finalValues;
            showResults();
        } else if (gameState.currentValues.length > 0 && gameState.pairs.length > 0) {
            // Resume game in progress
            startScreen.classList.add('hidden');
            evaluationScreen.classList.remove('hidden');
            
            // Restore current pair display
            const pair = gameState.pairs[gameState.currentPairIndex];
            if (pair) {
                value1.textContent = pair[0].name;
                value2.textContent = pair[1].name;
                description1.textContent = pair[0].description;
                description2.textContent = pair[1].description;
            }
            
            // Reset transition flag
            isTransitioning = false;
            
            updateDisplay();
        }
    } else {
        // Check if there are completed results to show
        const completedData = localStorage.getItem('valueTournamentCompleted');
        if (completedData) {
            const data = JSON.parse(completedData);
            gameState.userName = data.userName;
            gameState.currentValues = data.finalValues;
            showResults();
        }
    }
}

// Skip to end for testing
function skipToEnd() {
    // Get 10 random values for testing
    const shuffled = [...allValues];
    shuffleArray(shuffled);
    gameState.currentValues = shuffled.slice(0, 10);
    
    // Set a test name if none exists
    if (!gameState.userName) {
        gameState.userName = "Test User";
    }
    
    showResults();
}

// Take screenshot of values
function takeScreenshot() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Calculate height based on number of values
    const valuesCount = gameState.currentValues.length;
    const baseHeight = 200; // Header space
    const valueHeight = 90; // Space per value
    const footerHeight = 60; // Footer space
    const totalHeight = baseHeight + (valuesCount * valueHeight) + footerHeight;
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = totalHeight;
    
    // Set background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add title
    ctx.fillStyle = '#A71930'; // OWU red
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Your Core Values', canvas.width / 2, 60);
    
    // Add name with padding
    ctx.fillStyle = '#666666';
    ctx.font = '24px sans-serif';
    ctx.fillText(`${gameState.userName}'s Core Values`, canvas.width / 2, 100);
    
    // Add values with proper spacing
    let yPosition = 170; // Start position with padding
    gameState.currentValues.forEach((value, index) => {
        // White box background (matching the website)
        ctx.fillStyle = '#ffffff';
        const boxHeight = 70;
        const boxWidth = 700;
        const boxX = (canvas.width - boxWidth) / 2;
        
        // Draw white box with shadow effect
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
        
        // Create rounded rectangle
        const radius = 10;
        ctx.beginPath();
        ctx.roundRect(boxX, yPosition, boxWidth, boxHeight, radius);
        ctx.fill();
        
        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        // Green border (matching website)
        ctx.strokeStyle = '#B6BF00'; // OWU green
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(boxX, yPosition, boxWidth, boxHeight, radius);
        ctx.stroke();
        
        // Value name
        ctx.fillStyle = '#1E1E1E'; // OWU black
        ctx.font = 'bold 18px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(value.name.toUpperCase(), canvas.width / 2, yPosition + 25);
        
        // Value description
        ctx.fillStyle = '#666666';
        ctx.font = 'italic 14px sans-serif';
        ctx.fillText(value.description, canvas.width / 2, yPosition + 50);
        
        yPosition += valueHeight;
    });
    
    // Add footer with proper spacing
    ctx.fillStyle = '#999999';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    const currentDate = new Date().toLocaleDateString();
    ctx.fillText(`Generated on ${currentDate} | Personal Values Tournament`, canvas.width / 2, canvas.height - 20);
    
    // Convert to blob and download
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${gameState.userName || 'My'}-Core-Values.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 'image/png');
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Start the app
init();