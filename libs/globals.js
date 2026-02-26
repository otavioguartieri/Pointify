$(document).ready(function(){
    setCssBase();
});
$(window).on('resize', function(){
    setCssBase();
});
function setCssBase(){
    $('body').css('--footerHeight', $('footer').innerWidth() * 0.16 + 'px');
}
