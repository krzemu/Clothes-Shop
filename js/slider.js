let i = 0;



function changeAdv()
{
    let image = ' <img src="img/slider/main'+i+'.jpg" alt="slider">';
    $('#slider').html(image);
    $('#slider').fadeIn(1000);
    i++;
    if(i >= 3) {i = 0;}

    setTimeout(function(){
        changeAdv();
    },3000);
    setTimeout(function(){
        $('#slider').fadeOut(500);
    },2500);


}





$(document).ready(function () {
    changeAdv();


});



