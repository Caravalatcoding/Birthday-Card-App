var canvas = new fabric.Canvas('myCanvas');

function generateid()
{
   var name = document.getElementById("name-textbox").value;

    localStorage.setItem("user_name", name);

    window.location = "birthday-card.html";

}

function add()
{
    birthday_name = localStorage.getItem("user_name");
    document.getElementById("birthday-name").innerHTML = birthday_name;
    new_image();
}

function new_image()
{
    var random_gen = Math.random()*4;

    if(random_gen == 1)
    {
        fabric.Image.fromURL('Ha-Pea_Birthday.jpg', function(img){
            block_image_object = img;

            block_image_object.scaleToWidth(1500);
            block.image_object.scaleToHeight(800);
            block.image_object.set({
                top: 0,
                left: 0
            });
            canvas.add(block_image_object);
        });
    }
    else if(random_gen == 2)
    {
        fabric.Image.fromURL('Happy-Birthday-Birthday-Wishes-and-Images-Moonzori.png', function(img){
            block_image_object = img;

            block_image_object.scaleToWidth(1500);
            block.image_object.scaleToHeight(800);
            block.image_object.set({
                top: 0,
                left: 0
            });
            canvas.add(block_image_object);
        });
    }
    else if(random_gen == 3)
    {
        fabric.Image.fromURL('Happy-Birthday-card.jpeg', function(img){
            block_image_object = img;

            block_image_object.scaleToWidth(1500);
            block.image_object.scaleToHeight(800);
            block.image_object.set({
                top: 0,
                left: 0
            });
            canvas.add(block_image_object);
        });
    }
    else if(random_gen == 4)
    {
        fabric.Image.fromURL('Happy-Birthday-image-cake.jpeg', function(img){
            block_image_object = img;

            block_image_object.scaleToWidth(1500);
            block.image_object.scaleToHeight(800);
            block.image_object.set({
                top: 0,
                left: 0
            });
            canvas.add(block_image_object);
        });
    }
}

