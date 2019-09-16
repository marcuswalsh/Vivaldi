// Button clicks
document.getElementById('summerBtn').addEventListener('click', setSummer);
document.getElementById('springBtn').addEventListener('click', setSpring);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
document.getElementById('winterBtn').addEventListener('click', setWinter);


function setSummer(){
    // Change concerto text
    document.getElementById('season-text').innerHTML = 'Summer';
    // Change image
    document.getElementById('mainImage').src = 'images/summer.jpg';
    // Change background colour
    document.body.style.background = '#1BA848';
    // Change audio
    document.getElementById('song').src = 'songs/vivaldi-summer.mp3';
    // Update active border on buttons
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.add('activeBtn');
}

function setSpring(){
    // Change concerto text
    document.getElementById('season-text').innerHTML = 'Spring';
    // Change image
    document.getElementById('mainImage').src = 'images/spring.jpg';
    // Change background colour
    document.body.style.background = '#0E94D1';
    // Change audio
    document.getElementById('song').src = 'songs/vivaldi-spring.mp3';
    // Update active border on buttons
    document.getElementById('springBtn').classList.add('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
}

function setAutumn(){
    // Change concerto text
    document.getElementById('season-text').innerHTML = 'Autumn';
    // Change image
    document.getElementById('mainImage').src = 'images/autumn.jpg';
    // Change background colour
    document.body.style.background = '#FE6732';
    // Change audio
    document.getElementById('song').src = 'songs/vivaldi-autumn.mp3';
    // Update active border on buttons
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.add('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
}

function setWinter(){
    // Change concerto text
    document.getElementById('season-text').innerHTML = 'Winter';
    // Change image
    document.getElementById('mainImage').src = 'images/winter.jpg';
    // Change background colour
    document.body.style.background = '#1C64B9';
    // Change audio
    document.getElementById('song').src = 'songs/vivaldi-winter.mp3';
    // Update active border on buttons
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.add('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
}