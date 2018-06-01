var id, posx = 0, posy = 0;
var key_num, flag = 0;
var time=20;
var speed_increase=setInterval(changetime,5000);
function changetime(){
    time=time-5;
}
document.getElementById('start').onclick = function () {
    id = setInterval(moveright, time);
}
document.getElementById('stop').onclick = function () {
    clearInterval(id);
    posx = 0; posy = 0;
}
function arrows(key) {
    if (key == 39) {
        key_num = 39;
        clearInterval(id);
        document.getElementById('image').src = "car_right.png";
        document.getElementById('image').style.width = '130px';
        document.getElementById('image').style.height = '60px';
        id = setInterval(moveright, time);
    }
    else if (key == 37) {
        key_num = 37;
        clearInterval(id);
        document.getElementById('image').src = "car_left.png";
        document.getElementById('image').style.width = '130px';
        document.getElementById('image').style.height = '60px';
        id = setInterval(moveleft, time);
    }
    else if (key == 38) {
        key_num = 38;
        clearInterval(id);
        document.getElementById('image').src = "car_up.png";
        document.getElementById('image').style.width = '60px';
        document.getElementById('image').style.height = '130px';
        id = setInterval(movetop, time);
    }
    else if (key == 40) {
        key_num = 40;
        clearInterval(id);
        document.getElementById('image').src = "car_down.png";
        document.getElementById('image').style.width = '60px';
        document.getElementById('image').style.height = '130px';
        id = setInterval(movedown, time);
    }
}
window.addEventListener('keydown', function (event) {

    if (event.keyCode == 32) {
        if (flag == 0) {
            flag = 1;
            clearInterval(id);
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
    var carobj = document.getElementById('car');
    if (posx >= 872) {
        clearInterval(id);
        alert("Game Over!Try again");
        carobj.style.left = "0px";
        carobj.style.top = "0px";
        posx = 0;
        posy = 0;
    }
    carobj.style.left = posx + 'px';
    posx++;
}
function movedown() {
    var carobj = document.getElementById('car');
    if (posy >= 370) {
        clearInterval(id);
        alert("Game Over!Try again");
        carobj.style.left = "0px";
        carobj.style.top = "0px";
        posx = 0;
        posy = 0;
    }
    carobj.style.top = posy + 'px';
    posy++;
}
function moveleft() {
    var carobj = document.getElementById('car');
    if (posx < 0) {
        clearInterval(id);
        alert("Game Over!Try again");
        carobj.style.left = "0px";
        carobj.style.top = "0px";
        posx = 0;
        posy = 0;
    }
    carobj.style.left = posx + 'px';
    posx--;
}
function movetop() {
    var carobj = document.getElementById('car');
    if (posy < 0) {
        clearInterval(id);
        alert("Game Over!Try again");
        carobj.style.left = "0px";
        carobj.style.top = "0px";
        posx = 0;
        posy = 0;
    }
    carobj.style.top = posy + 'px';
    posy--;
}
