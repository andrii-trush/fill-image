;(function () {
    "use strict";

    jQuery.fn.stretchImg = function () {
        var that = this;

        jQuery.fn.stretchImg.destroy = function () {
            for (var i = 0; i < that.length; i++) {
                that[i].style = {};
                that[i].parentNode.style = {}
            }
        };
        return this.each(function () {
            var c = jQuery(this),
                cWidth = c[0].naturalWidth,
                cHeight = c[0].naturalHeight,
                p = c.parent(),
                pWidth = p.width(),
                pHeight = p.height(),
                dc = cHeight / cWidth,
                settings = {};
            if (cWidth / pWidth < cHeight / pHeight) {
                settings = {
                    height: pWidth * dc,
                    marginLeft: 0,
                    marginTop: -(pWidth * dc - pHeight) / 2,
                    width: pWidth
                };
            } else {
                settings = {
                    height: pHeight,
                    marginLeft: -(pHeight / dc - pWidth) / 2,
                    marginTop: 0,
                    width: pHeight / dc
                };
            }
            c.addClass('StretchImage');
            c.css(settings);
            p.css({overflow: 'hidden', position: 'relative'})
        });
    };
}(jQuery));