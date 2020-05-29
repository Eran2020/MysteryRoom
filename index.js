var wallId = 0;
var wallSRC = ["front_wall.png", "right_wall.png", "back_wall.png", "left_wall.png"];
var walls = ["front_wall", "right_wall", "back_wall", "left_wall"];
var items= ["clock-key", "note", "picture", "gun"];
var itemSRC= ["clock_key.png", "note.png", "picture.png", "gun.png"];

var userItems = [null, null];

var keypad = "keypad_large.png";
var padlock="padlock.jpg";
var store="";

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
                document.getElementById("text").innerHTML = "";
                document.getElementById("sfx-creak").play();
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
    let x;
    if (item=="gun") {
        x = document.getElementById("sfx-gun");
        x.volume = 0.3;
        x.play();
    }
    else {
        x = document.getElementById("sfx-pickup");
        x.volume = 0.4;
        x.play();
    }
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
    let x;
    switch(wallId) {
        case 2:
            x = document.getElementById("sfx-rain");
            x.volume = 0.1;
            x.play();
            break;
        case 3:
            x = document.getElementById("sfx-clock");
            x.play();
            break;
    }
}

function pauseAudio(test) {
    switch(test) {
        case 2:
            document.getElementById("sfx-rain").pause();
            break;
        case 3:
            document.getElementById("sfx-clock").pause();
            break;
    }
}
=======
function dist(x1,y1,x2,y2){
    return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
}
function lever(event){
    if(wallId == 0) scr(event,'keypad');
    else if (wallId == 1) twist(event, 'padlock');
}
var val=0;
function twist(event,str){
    if(ca == 2) {
        val = 0;
        var x = event.pageX;
        var y = event.pageY;
        var coords = "X coords: "+x+", Y coords: "+y;
        document.getElementById("cart").innerHTML=coords;
        var store;
        
       if(x>645&&y>138&&x<947&&y<700||x==0&&y==0){
           store = document.getElementById("selector1");
           val+=store.options[store.selectedIndex].value*1000;
           
           store = document.getElementById("selector2");
           val+=store.options[store.selectedIndex].value*100;
           
           store = document.getElementById("selector3");
           val+=store.options[store.selectedIndex].value*10;
           
           store = document.getElementById("selector4");
           val+=store.options[store.selectedIndex].value;
           console.log(val);
           if(val==31401){
             
            document.getElementById("des-rw").innerHTML="Unlocked the Safe";
            document.getElementById("pad").style.display="none";
            document.getElementById("PI").style.display="none";
            document.getElementById(str).style.display="none";
            document.getElementById("image-safe").style.display="none";
            document.getElementById("opensafe").src="vault-open.png";
            document.getElementById("opensafe").style.display="block";
           
            //document.getElementById("insideSafe").style.display="block"
           } else {


           }

       } else {
            document.getElementById("pad").style.display="none";
            document.getElementById("PI").style.display="none";
            document.getElementById(str).style.display="none";
            document.getElementById("des-rw").style.display="none";
           
            ca=0;
       }

    }

}
function createS(){



}
function scr(event, str){
    if(ca==1){
        var x = event.pageX;
        var y= event.pageY;
        var coords = "X coords: " + x + ", Y coords: " + y;
        document.getElementById("ji").innerHTML = coords;
        
        
        var password="518141";
        if(x>438&&x<878&&y>50&&y<650){
            var r = 585-533;
          //  550,585,672,585,550,458
          //  92,122
          
                var dis2 = dist(672,585-(122*3),x,y);
                var dis5 = dist(672,585-(122*2),x,y);
                var dis0 = dist(672,585,x,y);
                var dis8 = dist(672,585-122,x,y);
               
                var dis9 = dist(672+92,458,x,y);
                var dis6 = dist(672+92,458-122,x,y);
                var dis3 = dist(672+92,458-(2*122),x,y); 
                var disS = dist(672+92,585,x,y);
                let dis1 = dist(550,458-122-122,x,y);
                var dis4 = dist(550,458-122,x,y);
                var dis7 = dist(550,458,x,y);
                var disA = dist(550,585,x,y); console.log(x+"    "+y);
                if(dis1<r) {
                   
                    store+="1";                 
                    console.log("pressed 1");
                } else if(dis2<r) {
                    store+="2";                 
                    console.log("pressed 2");
                } else if(dis3<r) {
                    store+="3";                 
                    console.log("pressed 3");
                } else if(dis4<r) {
                    store+="4";                 
                    console.log("pressed 4");
                } else if(dis5<r) {
                    store+="5";                 
                    console.log("pressed 5");
                } else if(dis6<r) {
                    store+="6";                 
                    console.log("pressed 6");
                } else if(dis7<r) {
                    store+="7";                 
                    console.log("pressed 7");
                } else if(dis8<r) {
                    store+="8";                 
                    console.log("pressed 8");
                } else if(dis9<r) {
                    store+="9";                 
                    console.log("pressed 9");
                } else if(dis0<r) {
                    store+="0";                 
                    console.log("pressed 0");
                } else if(disA<r) {
                    store+="*";                 
                    console.log("pressed *");
                } else if(disS<r) {
                    store+="#";                 
                    console.log("pressed #");
                } 

                document.getElementById("des").style.display="inline";
                document.getElementById("des").innerHTML=store;
               if(store==password){
               // document.getElementById(str).style.display="none";
                document.getElementById("des").innerHTML="SUCCESS";
               } else if(store.length>=6){
                    store="";
                    document.getElementById("des").innerHTML="FAIL";

               }
       
                

        } else {
            document.getElementById(str).style.display="none";
            document.getElementById("des").style.display="none";

            ca = 0;
            store="";
        }

    }
}
function trueORfalse(b, str){
    if(b){

    }else{
        showImg(str);

    }

}
var ca = 0;
function showImg(item) {
    switch (item) {
        case "green-book":
            document.getElementById("text").innerHTML = "Here's a green book!";           
            break;
        case "red-book":
            document.getElementById("text").innerHTML = "Here's a red book!";           
            break;
        case "pink-book":
            document.getElementById("text").innerHTML = "Here's a pink book!";           
            break;
        case "yellow-book":
            document.getElementById("text").innerHTML = "Here's a yellow book!";           
            break;

        case "pass":
            document.getElementById("keypad").src=keypad;
            document.getElementById("keypad").style.display="block";            
            ca = 1;
            break;
        case "safe":
            document.getElementById("image-bookshelf").style.display = "none";
            document.getElementById("image-bookshelf-side").style.display = "block";
            document.getElementById("image-safe").style.display = "block";
            break;
        case "combination":
            document.getElementById("padlock").src=padlock;
            document.getElementById("padlock").style.display="block";
            document.getElementById("pad").style.display="block";
            document.getElementById("PI").style.display="inline";
            ca = 2;
            break;

        default:
            document.getElementById("text").innerHTML = "Here's something!";
    }
}


