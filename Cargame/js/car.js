var id,posx=0,posy=0;
document.getElementById('start').onclick = function () {
    // var carobj = document.getElementById('car');
    // id = setInterval(moveleft, 5);
    // function moveleft() {
    //     if (posx == 872)
    //         clearInterval(id);
    //     carobj.style.left = posx + 'px';
    //     posx++;
    // }
    id = setInterval(moveleft, 5);
}
document.getElementById('stop').onclick = function () {
    clearInterval(id);
}
window.addEventListener('keydown',function(event){
if(event.keyCode==39){
    clearInterval(id);
    id = setInterval(moveright, 5);
}
else if(event.keyCode==37){
    clearInterval(id);
    id = setInterval(moveleft, 5);
}
else if(event.keyCode==38){
    clearInterval(id);
    id = setInterval(movetop, 5);
}
else if(event.keyCode==40){
    clearInterval(id);
    id = setInterval(movedown, 5);
}
}
);
function moveright() {
    var carobj = document.getElementById('car');
    if (posx>=872)
        clearInterval(id);
    carobj.style.left = posx + 'px';
    posx++;
}
function movedown() {
    var carobj = document.getElementById('car');
    if (posy>=430)
        clearInterval(id);
    carobj.style.top = posy + 'px';
    posy++;
}
function moveleft() {
    var carobj = document.getElementById('car');
    if (posx<=0)
        clearInterval(id);
    carobj.style.left = posx + 'px';
    posx--;
}
function movetop() {
    var carobj = document.getElementById('car');
    if (posy<=0)
        clearInterval(id);
    carobj.style.top = posy + 'px';
    posy--;
}
