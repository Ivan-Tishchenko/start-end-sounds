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
function playSimultaneously(numInstances) {
  const startSounds = [];
  const endSounds = [];

  for (let i = 0; i < numInstances; i++) {
    startSounds.push(
      new Howl({
        src: ["./sounds/start.mp3"],
      })
    );
    endSounds.push(
      new Howl({
        src: ["./sounds/end.mp3"],
      })
    );
  }

  startSounds.forEach((sound) => sound.play());
  endSounds.forEach((sound) => sound.play());
}

// Initializing Howler.js
Howler.autoUnlock = false;

const button = document.querySelector(".test-button");
button.addEventListener("click", () => {
  playSequentially(); // Play 'start' and 'end' sequentially
});
