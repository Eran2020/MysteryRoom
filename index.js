var wallId = 0;
var wallSRC = ["front_wall.png", "right_wall.png", "back_wall.png", "left_wall.png"];
var walls = ["front_wall", "right_wall", "back_wall", "left_wall"];

var userItem = null;

function changeRoom(dir) {
    document.getElementById(walls[wallId]).style.display = "none";
    if (dir=="right") {
        wallId = (wallId + 1) % 4;
    }
    else {
        wallId = wallId - 1;
        if (wallId < 0) {
            wallId = 3;
        }
    }
    document.getElementById("image-background").src = wallSRC[wallId];
    document.getElementById(walls[wallId]).style.display = "block";
}

function showImg(item) {
    switch (item) {
        case 'safe':
            document.getElementById("image-safe").style.display = "block";
            break;
        default:
            document.getElementById("text").innerHTML = "Here's a "+item+"!" ;
    }
}

function hideImg(item){
    switch (item) {
        case 'bookshelf':
            document.getElementById("image-bookshelf").style.display = "none";
            document.getElementById("image-bookshelf-side").style.display = "block";
            break;
        case 'clock':
            if (userItem != "clock-key")
                document.getElementById("text").innerHTML = "The clock appears to be locked. Perhaps there is a key lying around."
            else
                document.getElementById("image-clock").style.display = "none";
            break;
    }
}