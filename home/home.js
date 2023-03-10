$(document).ready(function() {
    $('.pncchnb').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.pnctlnb').slideToggle();
    });
});

$(document).ready(function() {
    $('.pncchnb1').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.pnctlnb1').slideToggle();
    });
});

$(document).ready(function() {
    $('.pncchnb2').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.pnctlnb2').slideToggle();
    });
});

$(document).ready(function() {
    $('.pncchnb3').click(function() {
        $(this).parent().children('.pnctlnb3').slideToggle();
    });
});
$(document).ready(function() {
    $('.pncchnb4').click(function() {
        $(this).parent().children('.pnctlnb4').slideToggle();
    });
});
/* js search */
$(document).ready(function() {
    $('.icsearch').click(function() {
        $('.ipsearch').slideToggle();
    });
});