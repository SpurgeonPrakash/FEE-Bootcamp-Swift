var id, t, posx = 0, posy = 0;
var key_num, flag = 0;
var time = 10;
var carobj = document.getElementById("car");
var timer = 0;
var highscore = localStorage.getItem("highscore");
function changespeed(){
    clearInterval(id);
    time=time-5;
    arrows(key_num);
}
var speed_change=setInterval(changespeed,30000);
document.getElementById('bes_score').innerHTML = highscore;
function high_score() {
    if (highscore !== null) {
        if (timer > highscore) {
            localStorage.setItem("highscore", timer);
        }
    }
    else {
        localStorage.setItem("highscore", timer);
    }
    highscore = localStorage.getItem("highscore");
    document.getElementById('bes_score').innerHTML = highscore;
}
function changeTime() {
    timer++;
    document.getElementById("score").innerHTML = timer;
}
function game_over()
{
    clearInterval(id);
    clearInterval(t);
    high_score();
    timer = 0;
    alert("Game Over!Try again");
    document.getElementById("score").innerHTML = 0;
    document.getElementById('image').src = "images/car_right.png";
    document.getElementById('image').style.width = '130px';
    document.getElementById('image').style.height = '60px';
    carobj.style.left = "0px";
    carobj.style.top = "0px";
    posx = 0;
    posy = 0;
}
document.getElementById('start').onclick = function () {
    key_num = 39;
    high_score();
    id = setInterval(moveright, time);
    t = setInterval(changeTime, 1000);
    document.getElementById('bes_score').innerHTML = highscore;
}
document.getElementById('stop').onclick = function () {
    clearInterval(id);
    clearInterval(t);
    high_score();
    document.getElementById('image').src = "images/car_right.png";
    carobj.style.left = "0px";
    carobj.style.top = "0px";
    posx = 0; posy = 0;
}
function arrows(key) {
    if (key == 39) {
        key_num = 39;
        clearInterval(id);
        clearInterval(t);
        document.getElementById('image').src = "images/car_right.png";
        document.getElementById('image').style.width = '130px';
        document.getElementById('image').style.height = '60px';
        id = setInterval(moveright, time);
        t = setInterval(changeTime, 1000);
    }
    else if (key == 37) {
        key_num = 37;
        clearInterval(id);
        clearInterval(t);
        document.getElementById('image').src = "images/car_left.png";
        document.getElementById('image').style.width = '130px';
        document.getElementById('image').style.height = '60px';
        id = setInterval(moveleft, time);
        t = setInterval(changeTime, 1000);
    }
    else if (key == 38) {
        key_num = 38;
        clearInterval(id);
        clearInterval(t);
        document.getElementById('image').src = "images/car_up.png";
        document.getElementById('image').style.width = '60px';
        document.getElementById('image').style.height = '130px';
        id = setInterval(movetop, time);
        t = setInterval(changeTime, 1000);
    }
    else if (key == 40) {
        key_num = 40;
        clearInterval(id);
        clearInterval(t);
        document.getElementById('image').src = "images/car_down.png";
        document.getElementById('image').style.width = '60px';
        document.getElementById('image').style.height = '130px';
        id = setInterval(movedown, time);
        t = setInterval(changeTime, 1000);
    }
}
window.addEventListener('keydown', function (event) {
    if (event.keyCode == 32) {
        if (flag == 0) {
            flag = 1;
            clearInterval(id);
            clearInterval(t);
        }
        else if (flag == 1) {
            flag = 0;
            arrows(key_num);
        }
    }
    else
        arrows(event.keyCode);
}
);
function moveright() {
    if (posx >= 872) {
       game_over();
    }
    carobj.style.left = posx + 'px';
    posx++;
}
function movedown() {
    if (posy >= 370) {
       game_over();
    }
    carobj.style.top = posy + 'px';
    posy++;
}
function moveleft() {
    if (posx < 0) {
       game_over();
    }
    carobj.style.left = posx + 'px';
    posx--;
}
function movetop() {
    if (posy < 0) {
       game_over();
    }
    carobj.style.top = posy + 'px';
    posy--;
}
