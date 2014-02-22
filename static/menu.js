var QUERY = ' ';
var BUILD_ROAD = 'r';
var BULLDOZE = 'b';

var HIGHLIGHT_NONE = 0;
var HIGHLIGHT_MOUSEOVER = 1;
var HIGHLIGHT_QUERY = 2;

var current_cursor = QUERY;
var is_grid_on = 0;
var loop = 0;

var c;
var ctx;

var FPS = 60;
var FPScounter = 0;

var tiles = new Array();

var lastxcor = 0, lastycor = 0;

setInterval(function() {
    if (!loop) {
        return;
    }
    //FPScounter++;
    //if (FPScounter >= 60) {
        update();
        draw();
    //    FPScounter = 0;
    //}

    // can i have a sepcial function to draw the.. cursor movement and affected tiels? prob, lets see.

}, 1000/FPS);

function update() {

}

function draw() {
    ctx.clearRect(0,0,640,640);
    drawtiles();

    if (is_grid_on) {
        drawgrid();
    }
}

function drawtiles() {
    for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 20; x++) {
            //var tile = tiles[y][x];
            tiles[y][x].drawtile();

        }
    }
}

function Test(asdf){
    this.asdf = asdf;

    this.teste = function() {
        console.log("test");
    }
}

function Tile(xcor,ycor,highlight,fill,pollution,color) {
    this.xcor = xcor;
    this.ycor = ycor;
    this.highlight = highlight;
    this.fill = fill;
    this.pollution = pollution;
    this.color = color;

    this.drawtile = function() {
        //console.log("tile drew at: " + this.xcor + ", " + this.ycor);
        // console.log(this.highlight);
        if (this.highlight == HIGHLIGHT_MOUSEOVER) { // this needs to be at the end of the function.
            console.log("tile at: " + Math.floor(this.xcor / 32) + ", " + Math.floor(this.ycor / 32) + " is highlighted! (hover)");
            ctx.beginPath();
            ctx.rect(Math.floor(this.xcor/32) * 32 + .5, Math.floor(this.ycor/32) * 32 + .5, 32, 32);
            ctx.fillStyle = 'rgba(0,0,0,.1)';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(0,0,0,0)';
            ctx.stroke();
        }
    }
}

function build_road() {
    current_cursor = BUILD_ROAD;
    console.log("BUILDING ROAD");
}

function bulldoze() {
    current_cursor = BULLDOZE;
}

function query() {
    current_cursor = QUERY;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

$(document).ready(function(){

    for (var y = 0; y < 20; y++) { // function init
        tiles[y] = new Array();
        for (var x = 0; x < 20; x++) {
            tiles[y][x] = new Tile(x*32,y*32,0,null,0,"rgba(0,0,0,0)");
        }
    }

    c = document.getElementById("gamemap");
    ctx = c.getContext("2d");

    $("#gamebox").hide();
    $("#titlebox").hide();
    $("#titlebox").fadeIn();

    ctx.lineWidth = .5;

    

    setTimeout(function() {
        mainmenu();
        return;
    }, 1000);
    
});

function drawgrid() {
    for (var x = 1; x < 20; x++) { // lines are too thick for x and y
        ctx.moveTo(x*32 + .5,0);
        ctx.lineTo(x*32 + .5,640);
        ctx.stroke();
    } 

    for (var y = 1; y < 20; y++) { // fix this
        ctx.moveTo(0,y*32 + .5);
        ctx.lineTo(640,y*32 + .5);
        ctx.stroke(); 
    }
}

function mainmenu() {
    $("#titlebox").append("<button id='Play' onClick='rungame()'>Play</button>");
    return;
}

function rungame() {
    loop = 1;
    $("#gamebox").fadeIn();
    $("#titlebox").append("<button id='Win' onClick='quitgame()'>WinGame</button>");
    $("#Play").hide();

    c.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(c, evt);
        var xcor = mousePos.x;
        var ycor = mousePos.y;

        tiles[Math.floor(ycor/32)][Math.floor(xcor/32)].highlight = HIGHLIGHT_MOUSEOVER;
        if (Math.floor(lastycor/32) != Math.floor(ycor/32) || Math.floor(lastxcor/32) != Math.floor(xcor/32))
            tiles[Math.floor(lastycor/32)][Math.floor(lastxcor/32)].highlight = HIGHLIGHT_NONE;

        // this is at the end of the function.
        lastxcor = xcor;
        lastycor = ycor;
   
    }, false);

    //following should be for mouse click
    c.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(c, evt);
        var x = Math.floor(mousePos.x / 32);
        var y = Math.floor(mousePos.y / 32);


        tiles[y][x].highlight = HIGHLIGHT_QUERY;

    }, false);

    return;
}

function quitgame() {
    loop = 0;
    $("#gamebox").hide();
    $("#titlebox").html("you won, congrats");
    return;
}


