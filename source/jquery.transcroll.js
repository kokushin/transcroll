/*
 * transcroll.js v1.0.3
 *
 * Copyright 2015 @kokushing
 * http://stone.black/
 *
 * MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

;(function($) {

    $.fn.transcroll = function(option) {

        var defaults = {
            easing: .05,
            parallax: '.parallax',
            parallaxEasing: .5
        };

        var option         = $.extend({}, defaults, option);

        var $window        = $(window);
        var $el            = $(this);
        var scrollTop      = 0;
        var translateY     = 0;
        var easing         = option.easing;

        var $elParallax    = $(option.parallax);
        var parallaxEasing = option.parallaxEasing;

        // 初期設定
        init = function() {

            // 要素追加
            $el.wrap('<div class="ts-container"></div>');

            // ビュー部分を設定
            $el.css({
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0
            });

            // 親要素に高さを設定
            var containerHeight = $el.height();
            $el.parent().height(containerHeight);

            // スクロール量を取得
            $(document).on('scroll', function() {
                scrollTop = $window.scrollTop();
            });

            setInterval(function() {

                // スクロール量を更新
                translateY += (scrollTop - translateY) * easing;

                // スクロール実行
                if (translateY > 1) {
                    $el.css({
                        'transform':'translate3d(0,-' + translateY + 'px,0)'
                    });
                    $elParallax.css({
                        'transform':'translate3d(0,-' + (translateY * parallaxEasing) + 'px,0)'
                    });
                }
            }, 5);

        };

        // 実行
        init();

        return this;
    };

})(jQuery);