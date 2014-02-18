$(document).ready(function(){

    setTimeout(function() {
        $("#titlebox").children().prepend("<p>welcome to divcity!<p>");
    }, 1000);
    setTimeout(function() {
        $("#titlebox").children().prepend("<p>i kinda suck at javascript so this is all i have so far</p>");
    }, 2000);
    setTimeout(function() {
        $("#titlebox").children().prepend("<p>lol</p>");
    }, 4000);
    setTimeout(function() {
        $("#titlebox").children().prepend("<p>i hope you still get something out of this anyway :P</p>");
    }, 4500);
    setTimeout(function() {
        $("#titlebox").children().prepend("<p>here it is!</p>");
    }, 6000);

    setTimeout(function() {
        mainmenu();
        return;
    }, 7000);
    
});

function mainmenu() {
    $("#titlebox").prepend("<div id='Play' onClick='rungame()'>Play</div>");
    return;
}

function rungame() {
    alert('click me to win');
    quitgame();
}

function quitgame() {
    alert('you won. bye.');
    document.getElementById("titlebox").innerHTML = "you won, congrats";
    return();
}


