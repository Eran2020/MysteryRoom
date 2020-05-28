var wallId = 0;
var wallSRC = ["front_wall.png", "right_wall.png", "back_wall.png", "left_wall.png"];
var walls = ["front_wall", "right_wall", "back_wall", "left_wall"];
var items= ["clock-key", "note", "picture", "gun"];
var itemSRC= ["clock_key.png", "note.png", "picture.png", "gun.png"];

var userItems = [null, null];

function changeRoom(dir) {
    pauseAudio(wallId);
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
    playAudio(wallId);
    document.getElementById("image-background").src = wallSRC[wallId];
    document.getElementById(walls[wallId]).style.display = "block";
}

function showImg(item) {
    switch (item) {
        case 'safe':
            document.getElementById("image-safe").style.display = "block";
            break;
        case 'slot-1':
            img = document.getElementById("image");
            console.log(img.src);
            if (img.getAttribute('src') != "slot.png")
                img.src = "slot.png";
            else
                img.src = document.getElementById("image-slot-1").src;
            break;
        case 'slot-2':
            img = document.getElementById("image");
            console.log(img.src);
            if (img.getAttribute('src') != "slot.png")
                img.src = "slot.png";
            else
                img.src = document.getElementById("image-slot-2").src;
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
            if (userHasItem('clock-key')) {
                document.getElementById("image-clock").style.display = "none";
                loseItem('clock-key');
            }
            else
                document.getElementById("text").innerHTML = "The clock appears to be locked. Perhaps there is a key lying around.";
            break;
        case 'clock-key':
            pickUpItem(item);
            document.getElementById("image-clock-key").style.display = "none";
            break;
        case 'picture':
            pickUpItem(item);
            document.getElementById("image-picture").style.display = "none";
            break;
    }
}

function userHasItem(item) {
    for (i=0;i<userItems.length;i++) {
        if (item == userItems[i])
            return true
    }
    return false
}

function pickUpItem(item) {
    for (i=0;i<userItems.length;i++) {
        if (userItems[i] == null) {
            userItems[i] = item;
            listItems();
            return;
        }
    }
    console.log("Error", "Picked up too many items!");
}

function listItems() {
    if (userItems[0] != null) {
        document.getElementById("image-slot-1").src = itemSRC[items.indexOf(userItems[0])];
    }
    else {
        document.getElementById("image-slot-1").src = "slot.png";
    }
    if (userItems[1] != null) {
        document.getElementById("image-slot-2").src = itemSRC[items.indexOf(userItems[1])];
    }
    else {
        document.getElementById("image-slot-2").src = "slot.png";
    }
}

function loseItem(item) {
    userItems[userItems.indexOf(item)] = null;
    listItems();
}

function playAudio(wallId) {
    switch(wallId) {
        case 2:
            document.getElementById("sfx-rain").play();
            break;
    }
}

function pauseAudio(test) {
    switch(test) {
        case 2:
            document.getElementById("sfx-rain").pause();
            break;
    }
}