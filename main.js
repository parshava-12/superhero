canvas = new fabric.Canvas('myCanvas');

block_height = 150;
block_width = 150;

person_x = 500;
person_y = 300;

player = "";
block = "";

function update()
{
    fabric.Image.fromURL("player.png",function(Img){
    player = Img;

    player.scaleToWidth(120);
    player.scaleToHeight(150);
    player.set({
        top:person_y,
        left:person_x
    });
    canvas.add(player);
});
}



function new_Img(getImg)
{
    fabric.Image.fromURL(getImg,function(Img){
   block = Img; 

   block.scaleToWidth(block_width);
   block.scaleToHeight(block_height);
   block.set({
        top:person_y,
        left:person_x
    });
    canvas.add(block);
});
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPress = e.keyCode;
    console.log(keyPress);
    if (e.shiftKey == true && keyPress == "80")
    {
        console.log("Shift & P Are Pressed Together");
        block_height = block_height + 5;
        block_width = block_width + 5;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if (e.shiftKey == true && keyPress == "77")
    {
        console.log("Shift & M Are Pressed Together");
        block_height = block_height - 5;
        block_width = block_width - 5;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if (keyPress == "37")
    {
      left();
      console.log("Left");
    }

    if (keyPress == "38")
    {
      up();
      console.log("Up");
    }

    if (keyPress == "39")
    {
      right();
      console.log("Right");
    }  

    if (keyPress == "40")
    {
      down();
      console.log("Down");
    }










    if (keyPress == "65")
    {
      new_Img('captain_america_left_hand.png');
      console.log("a");
    }

    if (keyPress == "66")
    {
      new_Img('hulk_right_hand.png');
      console.log("b");
    }

    if (keyPress == "67")
    {
      new_Img('hulk_left_hand.png');
      console.log("c");
    }

    if (keyPress == "68")
    {
      new_Img('hulk_face.png');
      console.log("d");
    }

    if (keyPress == "69")
    {
      new_Img('hulk_legs.png');
      console.log("e");
    }

    if (keyPress == "70")
    {
      new_Img('hulk_body.png');
      console.log("f");
    }







    if (keyPress == "71")
    {
      new_Img('ironman_right_hand.png');
      console.log("g");
    }

    if (keyPress == "72")
    {
      new_Img('ironman_left_hand.png');
      console.log("h");
    }

    if (keyPress == "73")
    {
      new_Img('ironman_face.png');
      console.log("i");
    }

    if (keyPress == "74")
    {
      new_Img('ironman_legs.png');
      console.log("j");
    }

    if (keyPress == "75")
    {
      new_Img('ironman_body.png');
      console.log("k");
    }










    if (keyPress == "76")
    {
      new_Img('spiderman_right_hand.png');
      console.log("l");
    }

    if (keyPress == "77")
    {
      new_Img('spiderman_left_hand.png');
      console.log("m");
    }

    if (keyPress == "78")
    {
      new_Img('spiderman_face.png');
      console.log("n");
    }

    if (keyPress == "79")
    {
      new_Img('spiderman_legs.png');
      console.log("o");
    }

    if (keyPress == "80")
    {
      new_Img('spiderman_body.png');
      console.log("p");
    }






    if (keyPress == "81")
    {
      new_Img('thor_right_hand.png');
      console.log("b");
    }

    if (keyPress == "82")
    {
      new_Img('thor_left_hand.png');
      console.log("c");
    }

    if (keyPress == "83")
    {
      new_Img('thor_face.png');
      console.log("d");
    }

}
 function up()
 {
   if(person_y>0)
   {
   person_y=person_y-10;
   canvas.remove(player);
   update();
   }
 }

 function down()
 {
   if(person_y<600)
   {
   person_y=person_y+10;
   canvas.remove(player);
   update();
   }
 }

 function left()
 {
   if(person_x>0)
   {
   person_x=person_x-10;
   canvas.remove(player);
   update();
   }
 }

 function right()
 {
   if(person_x<1000)
   {
   person_x=person_x+10;
   canvas.remove(player);
   update();
   }
 }

