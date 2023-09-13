console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = documment.getElementById('myProgressBar');

let songs = [
    {songName: "Who's Ready for Tomorrow", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Who's Ready for Tomorrow", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Who's Ready for Tomorrow", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Who's Ready for Tomorrow", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Who's Ready for Tomorrow", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Who's Ready for Tomorrow", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Who's Ready for Tomorrow", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
]

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

// Listen to events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})