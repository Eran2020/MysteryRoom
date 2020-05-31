var wallId = 0;
var wallSRC = ["front_wall.png", "right_wall.png", "back_wall.png", "left_wall.png"];
var walls = ["front_wall", "right_wall", "back_wall", "left_wall"];
var keypad = "keypad_large.png";
var padlock="padlock.jpg";
var store="";
var val=0;
var jump;
var wa=false;
var end = 0;
var pic1;
var userItems = [null, null];
var sBadend, sBadsc,gunC,doorOpen,machineCol;

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

function dst(x1,y1,x2,y2){
    return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
}
function lever(event){
    if(wallId == 0) scr(event,'keypad');
    else if (wallId == 1) twist(event, 'padlock');
}


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

function imgLoaded(im){

    
    document.getElementById("container").style.display="none";
   
    createCanvas(1600,800);
    background(0);   
    if(end ==1) {
        setTimeout(function(){jump = createImg("foxy-scare.gif","","");jump.position(150,150);sBadsc.play();},2500);
        setTimeout(function(){background(0);fill(128,0,0);textColor();textSize(50);sBadend.play();text('BAD END',250,250)},2000);
    } else if(end ==2) {
        doorOpen.play();
        setTimeout(function(){gunC.play();},800);
        setTimeout(function(){machineCol.play();},800);
        setTimeout(function(){background(0);fill(15,82,186);textColor();textSize(50);text('YOU ARE SAVED!',250,250)},800);

        //audio

    }

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
          
                var dis2 = dst(672,585-(122*3),x,y);
                var dis5 = dst(672,585-(122*2),x,y);
                var dis0 = dst(672,585,x,y);
                var dis8 = dst(672,585-122,x,y);
               
                var dis9 = dst(672+92,458,x,y);
                var dis6 = dst(672+92,458-122,x,y);
                var dis3 = dst(672+92,458-(2*122),x,y); 
                var disS = dst(672+92,585,x,y);
                let dis1 = dst(550,458-122-122,x,y);
                var dis4 = dst(550,458-122,x,y);
                var dis7 = dst(550,458,x,y);
                var disA = dst(550,585,x,y); console.log(x+"    "+y);
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
                document.getElementById("des").innerHTML="SUCCESS";
                var c = 0;
              loop:  for (var ob of userItems){
               if(ob == "gun"){
                   end =2;
               break loop;
                }
               else end = 1;
                    
                } 
                sBadend= loadSound();
                sBadsc=loadSound();
                gunC=loadSound();
                doorOpen=loadSound();
                machineCol=loadSound();
                /*if(wa){
                document.getElementById("container").style.display="none";
                
                createCanvas(1600,800);
                background(0);   
                image(jump,150,150);
                }*/
            
                
               imgLoaded();
                
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


                
function draw(){
   
   

}

var ca = 0;
function showImg(item) {
    switch (item) {
        case "green-book":
            document.getElementById("txt").innerHTML = "Here's a green book!";           
            break;
        case "red-book":
            document.getElementById("txt").innerHTML = "Here's a red book!";           
            break;
        case "pink-book":
            document.getElementById("txt").innerHTML = "Here's a pink book!";           
            break;
        case "yellow-book":
            document.getElementById("txt").innerHTML = "Here's a yellow book!";           
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
            document.getElementById("txt").innerHTML = "Here's something!";
    }
}


