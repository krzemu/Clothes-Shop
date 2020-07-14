let i = 0;

const slider = document.getElementById("slider");

function hide()
{
    $("#slider").fadeOut(500);
}

function changeAdv()
{
    i++;
    if (i > 3) i = 0;
    let image = '<img src="img/slider/main'+i+'.jpg" alt="slider">';
    slider.innerHTML = image;
    $("#slider").fadeIn(500);


    setTimeout("changeAdv()", 5000);
    setTimeout("hide()", 4500);

}


window.onload = function()
{

    changeAdv();

};