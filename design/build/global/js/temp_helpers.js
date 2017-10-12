(function($) {
    $(document).on('click', '[data-pnp-toggle-class]', function () {
        $($(this).data('pnp-target')).toggleClass($(this).data('pnp-class'));
        $(this).toggleClass($(this).data('pnp-class'));
        return false;
    });


    //Accordions
    $(document).on('click', '.accordion .trigger', function (e) {
        var $contentToToggle = $(this).closest('.accordion').first().find('.reveal').first();

        if ($(this).hasClass('active')) {
            $contentToToggle.slideUp(300);
            $(this).removeClass('active');
        } else {
            $contentToToggle.slideDown(300);
            $(this).addClass('active');
        }
    });
    //
    // $('.accordion .trigger').each(function(){
    //    $(this).trigger('click');
    // });

    $(document).on('click', '.component-card-order:not(.-in)', function(){
       if($(window).outerWidth() < 992){
           $('.right-panel').fadeIn();
       }

       return false;
    });

    $(document).on('click', '[data-pnp-back]', function() {
        $('.right-panel').fadeOut();

        return false;
    });

    //Fixto
    $('#mog-breadcrumb').fixTo('body');

    // $('.shipment-details').fixTo('.component-shipment', {
    //     zIndex: 1
    // });
}(jQuery));