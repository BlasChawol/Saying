var list_output = 0;
var max_number = 177;
var row = 0;
var column = 0;
var last_row = Math.floor ( max_number / 3 ) + 1 ;

function list_print (){

    var list_row = list_row + "<h3 class='img_list'>";
 
    for ( column = 0 ; column < 3 ; ){

        list_row = list_row + "<img src='../4_img/" + list_output + ".jpg'>";

        list_output++;
        column++ ;
    }

    list_row = list_row + "</h3>";

    if (list_row == "undefined"){
        list_row = "";
    }

    return list_row;
}


for ( ; row < last_row  ;  ){
    document.write(
        list_print()
    )
    row++ ;
}
