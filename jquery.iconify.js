/*
   jQuery iconify plugin
   Author: Naren
   Website: http://narendran.info
   License: GNU v2
   Version: 1.1
*/

(function ($) {

    $.fn.iconify = function (options) {

        // defaults
        var iconPrefix = "fa fa-";
        var icon = "facebook";
        var color = "red";
        var hoverColor = "blue";
        var size = "28";
        var animate = true;
        var animateMultiplier = 1.5;

        // settings
        var settings = $.extend({
            color: color,
            hoverColor: hoverColor,
            icon: this.attr('id'),
            size: size,
            animate: animate,
            animateMultiplier: animateMultiplier
        }, options);

        // load the fontawesome css
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css"
        }).appendTo("head");

        // add styles
        var style = "font-size:" + settings.size + "px;";
        style += "color:" + settings.color + ";";
        style += "text-decoration:none;";

        // animation
        $(this).on({
            mouseenter: function () {
                $(this).css('color', settings.hoverColor);
                if (settings.animate) {
                    var fs = settings.animateMultiplier * settings.size;

                    fs = fs + 'px';
                    $(this).stop().animate({
                        fontSize: fs
                    });
                }
            },
            mouseleave: function () {
                $(this).css('color', settings.color);
                if (settings.animate) $(this).stop().animate({
                    fontSize: settings.size
                });
            }
        });

        return this.attr({
            class: iconPrefix + settings.icon,
            style: style
        });
    };
}(jQuery));
