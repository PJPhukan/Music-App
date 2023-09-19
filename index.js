console.log("hello")
let songIndex = 0;
let audio = new Audio("./Music/1.mp3")
let previous = document.getElementById('previous');
let playmusic = document.getElementById('play-music');
let next = document.getElementById('next');
let box = Array.from(document.getElementsByClassName('box'));
let musterplay = document.getElementById('musterplay');
let gif = document.getElementById('gif');
let progressBar = document.getElementById('progressBar')
let masterSongName = document.getElementById('masterSongName')
let SongItemPlay = document.getElementsByClassName('SongItemPlay')

let songs = [
    { songName: "Warriyo - Mortals ", filePath: "Music/1.mp3", coverPath: "./covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "Music/2.mp3", coverPath: "./covers/2.jpg" },
    { songName: "DEAF KEV - Invincible ", filePath: "Music/3.mp3", coverPath: "./covers/3.jpg" },
    { songName: "Different Heaven & EH!DE", filePath: "Music/4.mp3", coverPath: "./covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-", filePath: "Music/5.mp3", coverPath: "./covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "Music/2.mp3", coverPath: "./covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "Music/2.mp3", coverPath: "./covers/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "Music/2.mp3", coverPath: "./covers/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e", filePath: "Music/2.mp3", coverPath: "./covers/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "Music/4.mp3", coverPath: "./covers/10.jpg" },
]




box.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('h3')[0].innerText = songs[i].songName;
})

playmusic.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        playmusic.classList.remove('bx-play-circle')
        playmusic.classList.add('bx-pause-circle');
        gif.style.opacity = 1
    }
    else {
        audio.pause();
       
        playmusic.classList.remove('bx-pause-circle');
        playmusic.classList.add('bx-play-circle')
        gif.style.opacity = 0
    }
})

audio.addEventListener('timeupdate', () => {
    let progress = parseFloat((audio.currentTime / audio.duration) * 100);
    progressBar.value = progress;
    if (parseInt(audio.currentTime) == parseInt(audio.duration) ){
        playmusic.classList.remove('bx-pause-circle');
        playmusic.classList.add('bx-play-circle')
        gif.style.opacity = 0;
        progressBar.value=0
    }
   
})
progressBar.addEventListener('change', () => {
    audio.currentTime = ((progressBar.value * audio.duration) / 100);
  
})

const MakeAllplay = () => {
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
        element.classList.remove('bx-pause-circle');
        element.classList.add('bx-play-circle');
    })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((e) => {
    e.addEventListener('click', (element) => {
        if (audio.paused || audio.currentTime <= 0) {
            MakeAllplay();
            element.target.classList.remove('bx-play-circle');
            element.target.classList.add('bx-pause-circle');
            songIndex = parseInt(element.target.id);
            audio.src = ` Music/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audio.currentTime = 0;
            audio.play();
            gif.style.opacity = 1;
            playmusic.classList.remove('bx-play-circle')
            playmusic.classList.add('bx-pause-circle');
        }
        else{
            audio.pause();
            playmusic.classList.remove('bx-pause-circle');
            playmusic.classList.add('bx-play-circle');
            element.target.classList.remove('bx-pause-circle');
            element.target.classList.add('bx-play-circle');
            gif.style.opacity = 0;
        }
    })
})

previous.addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    audio.src = ` Music/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    playmusic.classList.remove('bx-play-circle')
    playmusic.classList.add('bx-pause-circle')
})
next.addEventListener('click',()=>{
    if (songIndex>=9) {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audio.src = ` Music/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    playmusic.classList.remove('bx-play-circle')
    playmusic.classList.add('bx-pause-circle')
})