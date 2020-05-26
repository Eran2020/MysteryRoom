var wallId = 0;
var wallSRC = ["front_wall.png", "right_wall.png", "back_wall.png", "left_wall.png"];
var walls = ["front_wall", "right_wall", "back_wall", "left_wall"];

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
        case "green-book":
            document.getElementById("text").innerHTML = "Here's a green book!";
            break;
        default:
            document.getElementById("text").innerHTML = "Here's something!";
    }
}