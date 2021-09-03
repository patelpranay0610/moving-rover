canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

nasa_images=["image 1.jpg","image 2.jpg","image 3.jpg","image 4.jpg"];
random_number=Math.floor(Math.random() * 4);
console.log(random_number);
background_image=nasa_images[random_number];
console.log("background_image="+background_image);

rover_image="rover.png";

rover_x=10;
rover_y=10;

function add(){
 background_img=new Image();
 background_img.onload=uploadBackground;
 background_img.src=background_image;

 rover_img=new Image();
 rover_img.onload=uploadRover;
 rover_img.src=rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
   {
        up();
        console.log("up");
}
if(keyPressed=='40')
{
     down();
     console.log("down");
}
if(keyPressed=='37')
{
     left();
     console.log("left");
}
if(keyPressed=='39')
{
     right();
     console.log("right");
}
}
function up(){
     if(rover_y>=0)
     {
          rover_y=rover_y-10;
console.log("when up arrow is pressed, x="+rover_x+"|y="+rover_y);
uploadBackground();
uploadRover();     }
}

function down(){
     if(rover_y<=500)
     {
          rover_y=rover_y+10;
console.log("when down arrow is pressed, x="+rover_x+"|y="+rover_y);
uploadBackground();
uploadRover();     }
}

function right(){
     if(rover_x<=700)
     {
          rover_x=rover_x+10;
console.log("when right arrow is pressed, x="+rover_x+"|y="+rover_y);
uploadBackground();
uploadRover();     }
}

function left(){
     if(rover_x>=0)
     {
          rover_x=rover_x-10;
console.log("when left arrow is pressed, x="+rover_x+"|y="+rover_y);
uploadBackground();
uploadRover();     }
}