var QUERY = ' ';
var BUILD_ROAD = 'r';
var BULLDOZE = 'b';

var current_cursor = QUERY;

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

$(document).ready(function(){

    $("#gamebox").hide();
    $("#titlebox").hide();
    $("#titlebox").fadeIn();

    setTimeout(function() {
        mainmenu();
        return;
    }, 1000);
    
});

function mainmenu() {
    $("#titlebox").append("<button id='Play' onClick='rungame()'>Play</button>");
    return;
}

function rungame() {
    $("#gamebox").fadeIn();
    $("#titlebox").append("<button id='Win' onClick='quitgame()'>WinGame</button>");
    $("#Play").hide();

    $(".tile").mouseover(function() {
        if($(this).css("background-color") == "rgba(0, 0, 0, 0)") {
            $(this).css("background-color","black");
        }
    }).mouseout(function() {
        // console.log($(this).css("background-color")); // color debug
        console.log(current_cursor);

        if($(this).css("background-color") == "rgb(0, 0, 0)") {
            $(this).css("background-color","rgba(0, 0, 0, 0)");
        }
    });
    $(".tile").click(function() {
        switch(current_cursor) {
            case 'r':
                $(this).css("background-color","red");
                break;
            case 'b':
                $(this).css("background-color","rgba(0, 0, 0, 0)");
                break;
            case ' ':
            default:
                break;

        }
    });

    return;
}

function quitgame() {
    $("#gamebox").hide();
    $("#titlebox").html("you won, congrats");
    return;
}


