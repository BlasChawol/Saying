var max_number = 198;
var img_number = Math.floor(Math.random()*1000);
for ( ; img_number > max_number; img_number =  img_number - max_number) {}
for ( ; img_number < 0; img_number = img_number + max_number){}
var r_1 = Math.floor(Math.random()*10);
var r_2 = Math.floor(Math.random()*10);

if (img_number == 175){
    if (r_1 == 7){
        if (r_2 == 3){}
        else {
            img_number = img_number - r_1;
        }
    }
    else{
        img_number = img_number + r_2;
    }
}
document.write(
    "<h3 class='picture'><img src='../4_img/" + img_number + ".jpg'><h3>"
)
