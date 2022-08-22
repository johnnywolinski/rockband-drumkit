const snare = document.querySelector('snare');
const bass = document.getElementById('bass');
const tom1 = document.getElementById('tom1');
const tom2 = document.getElementById('tom2');
const cymb = document.getElementById('cymb');
function playSound(event){
  if(event.keyCode === 65 )
  {const snareSound = new Audio('snare.mp3');
    snareSound.play();}
  if(event.keyCode === 83 )
  {const bassSound = new Audio('bass.mp3');
    bassSound.play()}
  if(event.keyCode === 68 )
  {const tom1Sound = new Audio('tom1.mp3');
    tom1Sound.play()}
  if(event.keyCode === 70 )
  {const tom2Sound = new Audio('tom2.mp3');
    tom2Sound.play()
    console.log(typeof(tom2Sound))}
  if(event.keyCode === 71 )
  {const cymbalSound = new Audio('hihat.mp3');
    cymbalSound.play();
  console.log(typeof(cymbalSound))
}}
document.addEventListener('keydown', playSound);
