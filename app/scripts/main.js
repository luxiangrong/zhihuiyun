(function($) {
        $(document).ready(function() {
           if($('.section').height() < $(window).height()) {
           		$('.section').height($(window).height());
           }

        });
    })(jQuery);