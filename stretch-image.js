(function () {
    this.StretchImg = function (selector) {
    };
    StretchImg.prototype.build = function (selector) {
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            var c = elements[i],
                cWidth = c.naturalWidth,
                cHeight = c.naturalHeight,
                p = c.parentNode,
                pWidth = p.getBoundingClientRect().width,
                pHeight = p.getBoundingClientRect().height,
                dc = cHeight / cWidth,
                ps = p.style,
                cs = c.style;
            if (cWidth / pWidth < cHeight / pHeight) {
                cs.height = (pWidth * dc) + 'px';
                cs.marginLeft = 0;
                cs.marginTop = (-(pWidth * dc - pHeight) / 2) + 'px';
                cs.width = (pWidth) + 'px';
            } else {
                cs.height = (pHeight) + 'px';
                cs.marginLeft = (-(pHeight / dc - pWidth) / 2) + 'px';
                cs.marginTop = 0;
                cs.width = (pHeight / dc) + 'px';
            }
            ps.overflow = 'hidden';
            ps.position = 'relative';
            c.className = 'StretchImage';
        }
    };
    StretchImg.prototype.destroy = function () {
        var elements = document.querySelectorAll('.StretchImage');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style = {};
            elements[i].parentNode.style = {}
        }
    }
}());