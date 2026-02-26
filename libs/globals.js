$(document).ready(function(){
    setCssBase();

    $('footer button.action').on('click', function(){
        $('footer button.action').removeClass('active');
        $(this).addClass('active');
        
        setBubblePosition();
    });
});
$(window).on('resize', function(){
    setCssBase();
    setBubblePosition();
});
function setCssBase(){
    $('body').css({
        '--footerHeight': `${$('footer').innerWidth() * 0.16}px`,
        '--footerWidth': `${$('footer').innerWidth()}px`,
    });
    setTimeout(() => {
        $('footer button.action').css('transition', '.3s ease');
        $('.bubbleContent').css('transition', '.3s ease');
    }, 100);
}
function setBubblePosition(){
    const activeButton = $('footer button.action.active');
    const buttonOffset = activeButton.offset();
    const buttonWidth = activeButton.outerWidth();
    
    $('.bubbleContent').css('transform',`translate(${parseFloat($('footer').innerWidth()/2 - parseFloat(buttonOffset.left + buttonWidth/2))*-1}px,0)`);
}