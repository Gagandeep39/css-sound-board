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
    document.getElementById(sound).play();
  });

  // Adds button for every udio element
  document.getElementById('buttons').appendChild(btn);
});
