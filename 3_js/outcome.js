var max_number = 149;
var img_number = Math.floor(Math.random()*1000);
for ( ; img_number > max_number; img_number =  img_number - max_number) {}
for ( ; img_number < 0; img_number = img_number + max_number){}
document.write(
    "<h3 class='picture'><img src='../4_img/" + img_number + ".jpg'><h3>"
)