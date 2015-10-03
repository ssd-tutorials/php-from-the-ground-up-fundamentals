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