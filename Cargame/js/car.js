var id, t, posx = 0, posy = 0;
var key_num, flag = 0;
var time = 15;
var timer = 0;
var left=37;
var up=38;
var right=39;
var down=40;
var space=32;
var highscore = localStorage.getItem("highscore");
var carobj = document.getElementById("car");
//chandgespeed is to increase the speed of the car
function changespeed(){
    clearInterval(id);
    time=time-10;
    arrows(key_num);
}
var speed_change=setInterval(changespeed,30000);
document.getElementById('bes_score').innerHTML = highscore;
//high_score is to change the hig score when user recored the new score
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
//the game_over displays when the game was completed
function game_over()
{
    clearInterval(id);
    clearInterval(t);
    high_score();
    timer = 0;
    document.getElementById('name').innerHTML="<span style='color:red'>Game Over</span>";
    document.getElementById("cont").style.boxShadow="0px 0px 30px red";
    //alert("Game Over!Try again");
    document.getElementById("score").innerHTML = 0;
    document.getElementById('image').src = "images/car_right.png";
    document.getElementById('image').style.width = '130px';
    document.getElementById('image').style.height = '60px';
    carobj.style.left = "0px";
    carobj.style.top = "0px";
    posx = 0;
    posy = 0;
}
// the function move appears when the new game started
function move()
{
    t = setInterval(changeTime, 1000);
    document.getElementById('name').innerHTML="ROAD RASH";
    document.getElementById("cont").style.boxShadow="0px 0px 30px green";
}
//when user clicks on the start button the car moves in right direction
document.getElementById('start').onclick = function () {
    id = setInterval(moveright, time);
    key_num = right;
    high_score();
    move();
    document.getElementById('bes_score').innerHTML = highscore;
}
//when user click on the stop button the car stops at that point and comes back to the original position
document.getElementById('stop').onclick = function () {
    clearInterval(id);
    clearInterval(t);
    high_score();
    timer = 0;
    document.getElementById('image').src = "images/car_right.png";
    carobj.style.left = "0px";
    carobj.style.top = "0px";
    posx = 0; posy = 0;
}
function arrows(key) {
    //To move the car in right direction when right arrow is clicked
    if (key == right) {
        key_num = right;
        clearInterval(id);
        clearInterval(t);
        move();
        document.getElementById('image').src = "images/car_right.png";
        document.getElementById('image').style.width = '130px';
        document.getElementById('image').style.height = '60px';
        id = setInterval(moveright, time);
    }
    //To move the car in left direction when left arrow is clicked
    else if (key == left) {
        key_num = left;
        clearInterval(id);
        clearInterval(t);
        move();
        document.getElementById('image').src = "images/car_left.png";
        document.getElementById('image').style.width = '130px';
        document.getElementById('image').style.height = '60px';
        id = setInterval(moveleft, time);
    }
    //To move the car in up direction when up arrow is clicked
    else if (key == up) {
        key_num = up;
        clearInterval(id);
        clearInterval(t);
        move();
        document.getElementById('image').src = "images/car_up.png";
        document.getElementById('image').style.width = '60px';
        document.getElementById('image').style.height = '130px';
        id = setInterval(movetop, time);
    }
    //To move the car in down direction when down arrow is clicked
    else if (key == down) {
        key_num =down;
        clearInterval(id);
        clearInterval(t);
        move();
        document.getElementById('image').src = "images/car_down.png";
        document.getElementById('image').style.width = '60px';
        document.getElementById('image').style.height = '130px';
        id = setInterval(movedown, time);
    }
}
//if user clicks any button this block should execute
window.addEventListener('keydown', function (event) {
    //If user clicks the space bar
    if (event.keyCode == space) {
        //To pause the car
        if (flag == 0) {
            flag = 1;
            clearInterval(id);
            clearInterval(t);
        }
    //If user clicks space bar 2d time
        else if (flag == 1) {
            //to Restart the car once paused in the same direction
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
