
let category = 0;
const names = ['jacket', 'hoodie', 't-shirt', 'trousers', 'hat'];
let availabeItem = [4, 6, 5, 5, 5];
let activeColor = 0;




function toggleToProd(object){
    $('#startMenu').slideUp();
    
    setTimeout(function(){
        $('#startMenu').remove();
        productNav(object);
        
    }, 400);
    
}


function changeCat(object){
    
    $('#shopLabel').fadeOut();
    setTimeout(function(){
        
        $('#shopLabel').html(' ');
        $('#shopLabel').fadeIn();
        productNav(object);
        
    },400);
}




function changeToProduct(category, number)
{
    $('#shopLabel').fadeOut();
     setTimeout(function(){
         
         $('#shopLabel').html(' ');
         $('#shopLabel').fadeIn();
         productSide(category, number);
         
     },400);

}


function mainNav(){
    
    $('<h1/>', {'html':'Wybierz kategorię'}).appendTo('#startMenu');
    $('<div/>', {'class':'itemBox'}).appendTo('#startMenu');
    for(let i = 0; i < 5; i++)
    {

        $('<figure/>', {'id':'N'+i}).on('click', function(){toggleToProd(i)}).appendTo('.itemBox');
        $('<img src="img/clothes/'+names[i]+'/'+names[i]+'1.jpg" alt=""/>').appendTo('figure#N'+i);
        $('<figcaption/>', {'html':names[i]}).appendTo('figure#N'+i);
    }    
            
        
        
}

function productNav(nr){

    $('<div/>', {'class':'sectionBox'}).appendTo('#shopLabel');
    
        $('<aside/>').appendTo('.sectionBox');
            $('<nav/>').appendTo('aside');
                $('<ul/>', {'id':'stickyMenu'}).appendTo('nav');
                    $('<li/>', {'html':'Menu'}).appendTo('ul#stickyMenu');
                    for(let x = 0; x<5; x++)
                    {
                        $('<li/>', {'html': names[x]}).on('click', function(){changeCat(x);}).appendTo('ul');
                    }
                    stickyNav();





    $('<section/>', {'id':'shopArea'}).appendTo('.sectionBox');
    $('<h1/>', {'html': names[nr]}).appendTo('section');
    $('<div/>', {'class':'itemBoxP'}).appendTo('section');
    
    for(let i = 0; i < availabeItem[nr]; i++)
    {
        
        $('<figure/>', {'id':'N'+i}).on('click', function(){changeToProduct(nr, i);}).appendTo('.itemBoxP');
        $('<img src="img/clothes/'+names[nr]+'/'+names[nr]+(i+1)+'.jpg" alt=""/>').appendTo('figure#N'+i);
        $('<figcaption/>', {'html': '200zł'}).appendTo('figure#N'+i);
    }
    

}

function productSide(category, number)
{
    $('<div/>',{'class':'spacex200'}).appendTo('#shopLabel');
    
    $('<div/>', {'class':'sectionBox'}).appendTo("#shopLabel");
        $('<div/>', {'class':'arrow', 'html': '<img src="img/arrow.png" alt=""/>'}).on('click', function(){ 
            $('#shopLabel').html('');
            productNav(category);
        }).appendTo('.sectionBox');
        $('<div/>', {'class':'TopSide'}).appendTo('.sectionBox');
            $('<div/>', {'class':'lf_col'}).appendTo('.TopSide');
            $('<div/>', {'class':'selection'}).appendTo('.lf_col');
            $('<img src="img/clothes/'+names[category]+'/'+names[category]+(number+1)+'.jpg" alt="jacket">').appendTo('.selection');
        $('<div/>', {'class':'rt_col'}).appendTo('.TopSide');
            $('<div/>', {'id':'Ndiv', 'html':names[category]}).appendTo('.rt_col');
            $('<div/>', {'id':'Pdiv', 'html':'200zł'}).appendTo('.rt_col');
            $('<p/>', {'html':'Dostępne kolory'}).appendTo('.rt_col');
            $('<div/>', {'class':'colorDots'}).appendTo('.rt_col');
                $('<div/>',{'class':'dots', 'id':'Rdot'}).on('click', function(){changeColor(category, number, 1);}).appendTo('.colorDots');
                $('<div/>',{'class':'dots', 'id':'Bdot'}).on('click', function(){changeColor(category, number, 2);}).appendTo('.colorDots');
            $('<div/>', {'class': 'BuyButton', 'html':'Kup teraz'}).appendTo('.rt_col');
}


function changeColor(category, number, color)
{
    $('.selection').html('');
    if (color != 0)
    {
        $('<img src="img/clothes/'+names[category]+'/'+names[category]+(number+1)+color+'.jpg" alt="Aktualnie nie posiadamy produktu.">').appendTo('.selection');
    }
    else if (color == 0)
    {
        $('<img src="img/clothes/'+names[category]+'/'+names[category]+(number+1)+'.jpg" alt="Aktualnie nie posiadamy produktu.">').appendTo('.selection');
    }
    $('.colorDots').html('');
    if(color == 0)
    {
        activeColor = 0;
        $('<div/>',{'class':'dots', 'id':'Rdot'}).on('click', function(){changeColor(category, number, 1);}).appendTo('.colorDots');
        $('<div/>',{'class':'dots', 'id':'Bdot'}).on('click', function(){changeColor(category, number, 2);}).appendTo('.colorDots');
    }
    else if(color == 1)
    {
        activeColor = 1;
        $('<div/>',{'class':'dots', 'id':'Gdot'}).on('click', function(){changeColor(category, number, 0);}).appendTo('.colorDots');
        $('<div/>',{'class':'dots', 'id':'Bdot'}).on('click', function(){changeColor(category, number, 2);}).appendTo('.colorDots');
    }
    else if(color == 2)
    {
        activeColor = 2;
        $('<div/>',{'class':'dots', 'id':'Rdot'}).on('click', function(){changeColor(category, number, 1);}).appendTo('.colorDots');
        $('<div/>',{'class':'dots', 'id':'Gdot'}).on('click', function(){changeColor(category, number, 0);}).appendTo('.colorDots');
    }
}















$(document).ready(function () {
    
    mainNav();
    
    







});







function stickyNav() {

    var start = function () {
        $(".hide").fadeIn(300);
        $(".hide").removeClass("hide");
        $("#starter").removeClass("starter");
    };
    start();


    var NavY = $("#stickyMenu").offset().top;

    var stickyNav = function () {
        var ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('#stickyMenu').addClass('sticky');

            $('#stickyMenu').addClass('centerNav');
        } else {
            $('#stickyMenu').removeClass('sticky');

            $('#stickyMenu').removeClass('centerNav');
        }
    };
    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });


}
