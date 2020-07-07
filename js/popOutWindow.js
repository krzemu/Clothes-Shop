





$(document).ready(function () {
    
    setTimeout(function()
    {
        
        $('.container').css('filter', 'brightness(20%)');
        $('.container').css('background-color', 'rgba(85, 85, 85, 0.63)');
        $('.container').css('filter', 'blur(1,5px)');
        popOutLoadout();
    },1500);

    

});

let leftMessage = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'; 
let rightMessage = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour';
function popOutLoadout()
{
    $('<div/>', {'id' : 'popOut'}).appendTo('body');
        $('<div/>', {'class':'leftSide'}).appendTo('#popOut');
            $('<div/>', {'class':'leftMessage', 'html': leftMessage}).appendTo('.leftSide');
        $('<div/>', {'class':'rightSide'}).appendTo("#popOut");
            $('<div/>', {'class':'rightMessage', 'html':rightMessage}).appendTo('.rightSide');
            $('<div/>', {'id':'inputEmail'}).appendTo('.rightSide');
                $('<input/>', {'name':'E-mail', 'id':'email'}).appendTo('#inputEmail');
            $('<div/>', {'class':'buttonArea'}).appendTo(".rightSide");
                $('<div/>', {'class':'sendButton'}).appendTo('rightSide');
        $('<div/>', {'id':'exitButton'}).on('click', function(){ removePopOut();}).appendTo("#popOut");

}


function removePopOut()
{
    $('#popOut').remove();
    $('.leftSide').remove();
    $('.rightSide').remove();
    $('.leftmessage').remove();
    $('.rightMessage').remove();
    $('#inputEmail').remove();
    $('input').remove();
    $('.sendButton').remove();
    $('.container').css('filter', 'brightness(100%)');
    $('.container').css('background-color', 'rgb(255,255,255)');
    $('.container').css('filter', 'blur(0)');

}