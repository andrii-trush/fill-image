(function () {
    "use strict";

    this.StretchImg = function (selector) {
        var elements = document.querySelectorAll(selector);
        return elements.forEach(function (current) {
            var c = current,
                cWidth = c.naturalWidth,
                cHeight = c.naturalHeight,
                p = c.parentNode,
                pWidth = p.getBoundingClientRect().width,
                pHeight = p.getBoundingClientRect().height,
                dc = cHeight / cWidth,
                ps = p.style,
                cs = c.style;
            if (cWidth / pWidth < cHeight / pHeight) {
                cs.height = pWidth * dc;
                cs.marginLeft = 0;
                cs.marginTop = -(pWidth * dc - pHeight) / 2;
                cs.width = pWidth;
            } else {
                cs.height = pHeight;
                cs.marginLeft = -(pHeight / dc - pWidth) / 2;
                cs.marginTop = 0;
                cs.width = pHeight / dc
            }
            ps.overflow = 'hidden';
            ps.position = 'relative';
        });
    };
}());