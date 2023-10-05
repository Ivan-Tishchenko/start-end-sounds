Howler.html5 = true;

// create objects to "start" and "end"
const startSound = new Howl({
  src: ["./sounds/start.mp3"],
  onloaderror: (id, error) => {
    console.error("Error loading start sound:", error);
  },
  onplayerror: (id, error) => {
    console.error("Error playing start sound:", error);
  },
});

const endSound = new Howl({
  src: ["./sounds/end.mp3"],
  onloaderror: (id, error) => {
    console.error("Error loading end sound:", error);
  },
  onplayerror: (id, error) => {
    console.error("Error playing end sound:", error);
  },
});

// Function to play 'start' and 'end' sounds sequentially
function playSequentially() {
  startSound.play();
  startSound.on("end", () => {
    endSound.play();
  });
}

// Function to play multiple instances of 'start' and 'end' sounds simultaneously
function playSimultaneously() {
  new Howl({
    src: ["./sounds/start.mp3"],
  }).play();
  new Howl({
    src: ["./sounds/end.mp3"],
  }).play();
}

// Initializing Howler.js
Howler.autoUnlock = false;

const button = document.querySelector(".test-button");

// Function to test with different sets
function testSets(numSets) {
  for (let i = 0; i < numSets; i++) {
    playSimultaneously();
    setTimeout(() => {
      playSet();
    }, startSound.duration() * 1000); // Wait for the duration of 'start' sound
  }
}

button.addEventListener("click", () => {
  const setNumber = parseInt(
    document.querySelector(".number").value
  );
  console.log(setNumber);
  testSets(setNumber || 1); // Test with 1 set
});
