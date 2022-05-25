var max_number = 176;
var img_number_1 = Math.floor(Math.random()*1000);
var img_number_2 = Math.floor(Math.random()*3000);
var random_1 = Math.floor(Math.random()*10);
var random_2 = Math.floor(Math.random()*30);


for ( ; random_1 < 2; random_1 = 2) {}

for ( ; img_number_1 > max_number; img_number_1 =  img_number_1 - max_number) {}
for ( ; img_number_1 < 0; img_number_1 = img_number_1 + max_number){}

for ( ; img_number_2 > max_number; img_number_2 =  img_number_2 - max_number) {}
for ( ; img_number_2 < 0; img_number_2 = img_number_2 + max_number){}

if (img_number_1 == img_number_2) {

    img_number_2 = img_number_2 * random_1;

    for ( ; img_number_2 > max_number; img_number_2 = img_number_2 - max_number){}
    for ( ; img_number_2 < 0; img_number_2 = img_number_2 + max_number){}

    if (img_number_1 == img_number_2) {
    img_number_2 = img_number_2 * random_1 * random_2;

    for ( ; img_number_2 > max_number; img_number_2 = img_number_2 - max_number){}
    for ( ; img_number_2 < 0; img_number_2 = img_number_2 + max_number){}
}
}

var r_1 = Math.floor(Math.random()*10);
var r_2 = Math.floor(Math.random()*10);

if (img_number_1 == 175){
    if (r_1 == 7){
        if (r_2 == 3){}
        else {
            img_number_1 = img_number_1 - r_1;
        }
    }
    else{
        img_number_1 = img_number_1 + r_2;
    }
}

if (img_number_2 == 175){
    if (r_1 == 6){
        if (r_2 == 2){}
        else {
            img_number_2 = img_number_2 - r_2;
        }
    }
    else{
        img_number_2 = img_number_2 + r_1;
    }
}

document.write(
    "<h3 class='picture'><img src='../4_img/" + img_number_1 + ".jpg'><h3>"
)
document.write(
    "<h3 class='picture'><img src='../4_img/" + img_number_2 + ".jpg'><h3>"
)