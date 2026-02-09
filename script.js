function startGame() {
  document.body.innerHTML = `
    <h1>Level 1 💖</h1>
    <p>First question…</p>
    <button onclick="nextLevel()">Continue</button>
  `;
}

function nextLevel() {
  document.body.innerHTML = `
    <h1>Level 2 💘</h1>
    <p>You’re doing great.</p>
    <button onclick="finalLevel()">Next</button>
  `;
}

function finalLevel() {
  document.body.innerHTML = `
    <h1>❤️ Final Level ❤️</h1>
    <p>Will you be my Valentine?</p>
    <button onclick="yes()">Yes 💕</button>
  `;
}

function yes() {
  document.body.innerHTML = `
    <h1>🥰</h1>
    <p>You just made me the happiest person.</p>
  `;
}
