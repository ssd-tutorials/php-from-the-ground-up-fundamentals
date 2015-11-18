(function(window, document, $) {

    "use strict";

    window.SSDSystem = window.SSDSystem || {};

    window.SSDSystem.App = {

        slider: function() {

            "use strict";

            $('.slider').each(function() {

                (new window.SSDSystem.Slider($(this))).init();

            });

        },

        navigation: function() {

            "use strict";

            $('form').on('change', '#navigationSelect', function () {

                window.location.href = $(this).val();

            });

        },

        init: function() {

            "use strict";

            this.slider();
            this.navigation();

        }

    };


    $(function () {

        window.SSDSystem.App.init();

    });

})(window, document, window.jQuery);
(function(window, document, $, app) {

    "use strict";

    app.Slider = function(instance) {

        "use strict";

        var slides = [],
            slides_length = 0,
            proceed = true,
            wait = 5000,
            current_index = null,
            next_index = null,
            fadeSpeed = 500;

        this.init = function() {

            "use strict";

            slides = $(instance).find('.slide');
            slides_length = slides.length;

            if (slides_length === 0) {

                return;

            }

            if (slides_length === 1) {

                slides[0].addClass('next');
                proceed = false;

                return;

            }

            $.each(slides, function(index, element) {

                if (index === 0) {

                    $(element).addClass('active');
                    current_index = 0;

                }

                if (index === 1) {

                    $(element).addClass('next');
                    next_index = 1;

                }

                if ( (index + 1) === slides_length && proceed ) {

                    iterate();

                }

            });

        };

        function revealNext() {

            "use strict";

            $(slides[current_index]).fadeOut(fadeSpeed, function() {

                $(this).removeClass('active').show();
                current_index = next_index;

                var next_slide_index = (next_index + 1) < slides_length ?
                    next_index + 1 :
                    0;

                $(slides[next_slide_index]).addClass('next');

                $(slides[current_index]).removeClass('next').addClass('active');

                next_index = next_slide_index;



            });

        }

        function iterate() {

            "use strict";

            var timeout = setTimeout(function() {

                revealNext();

                clearTimeout(timeout);

                iterate();

            }, wait);

        }

    };

})(window, document, window.jQuery, window.SSDSystem);