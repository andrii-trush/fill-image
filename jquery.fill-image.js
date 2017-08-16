/*!
 * Stretch Image v1.0.0
 * Copyright 2017 Trush Dev.
 * Licensed under the MIT license
 */


;(function () {
    "use strict";

    var FillImage = function () {
    };

    FillImage.prototype = {
        init: function (selector) {
            var elements;
            if (typeof selector === 'string') {
                elements = document.querySelectorAll(selector);
            }
            else {
                elements = selector;
            }
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
                ps.overflow = 'hidden';
                ps.position = 'relative';
                ps.maxWidth = '100%';
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
                c.classList.add('FillImage');
            }
        },
        resize: function () {
            var elements = document.querySelectorAll('.FillImage');
            fill.destroy(elements);
            fill.init(elements)
        },
        destroy: function (selector) {
            var elements;
            if (typeof selector === 'undefined') {
                elements = document.querySelectorAll('.FillImage');
            }
            else if (typeof selector === 'string') {
                elements = document.querySelectorAll(selector);
            } else {
                elements = selector;
            }
            for (var i = 0; i < elements.length; i++) {
                elements[i].style = {};
                elements[i].classList.remove('FillImage');
                elements[i].parentNode.style = {}
            }
            window.removeEventListener("resize", function(){
                this.resize()
            });
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        var fill = new FillImage();
        fill.init('.FillImage, [data-image="fill"]')
    });

    jQuery.fn.fillImage = function () {
        var that = this;
        var fill = new FillImage();

        jQuery.fn.fillImage.destroy = function () {
            fill.destroy(that);
            window.removeEventListener("resize", function () {
                fill.resize()
            });
        };
        jQuery.fn.fillImage.init = function () {
            fill.init(that);
            window.addEventListener("resize", function () {
                fill.resize()
            });
        };

        window.addEventListener("resize", function () {
            fill.resize()
        });

        return fill.init(that);
    };
}(jQuery));


