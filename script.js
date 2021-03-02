const sounds = [
  'bird',
  'dog-bark',
  'game-soundtrack',
  'lion-roar',
  'retro-game',
];

sounds.forEach((sound) => {
  const btn = document.createElement('button');

  // Adds class 'btn' to every audio element with Text secifie in array
  btn.classList.add('btn');
  btn.innerText = sound;

  // Adds a click listener to play
  btn.addEventListener('click', () => {
    // Stops all existing sounds
    stopAudio();
    // Play the selected audio
    document.getElementById(sound).play();
  });

  // Adds button for every udio element
  document.getElementById('buttons').appendChild(btn);
});

function stopAudio() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
