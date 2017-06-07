//parallax
$(window).scroll(function () {
    var st = $(this).scrollTop();
    $('.bg_image').css('top', -(st / 4) + 'px');
});

//carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        autoWidth: false,
        //autoHeight: true,
        navText: [

            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"

        ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            500: {
                items: 2,
                nav: true
            },
            900: {
                items: 3,
                nav: false
            }
        }
    });
    var owl = $('.owl-carousel');
    // owl.on('mousewheel', '.owl-stage', function (e) {
    //     if (e.deltaY > 0) {
    //         owl.trigger('next.owl');
    //     } else {
    //         owl.trigger('prev.owl');
    //     }
    //     e.preventDefault();
    // });
});

//mob menu
$('.open_mob_menu').click(function () {
    var menu = $('.mobile_menu');
    if(menu.is(':hidden')){
        menu.css("display","flex");
    }else{
        menu.css("display","none");
    }
});