/*
 * transcroll.js v1.0.0
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

        var option = $.extend({}, defaults, option);

        var $el = $(this);
        var _scrollTop = 0;
        var _translateY = 0;
        var _easing = option.easing;

        if (option.parallax !== null) {
            var $elParallax = $(option.parallax);
            var _parallaxEasing = option.parallaxEasing;
        }

        // 初期設定
        function init() {

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
            var _containerHeight = $el.height();
            $el.parent().height(_containerHeight);

            // スクロール量を取得
            $(document).on('scroll', function() {
                _scrollTop = $(window).scrollTop();
            });

            setInterval(function() {

                // スクロール量を更新
                _translateY += (_scrollTop - _translateY) * _easing;

                // スクロール実行
                if (_translateY > 1) {
                    $el.css({
                        '-webkit-transform':'translate3d(0,-' + _translateY + 'px,0)',
                                'transform':'translate3d(0,-' + _translateY + 'px,0)'
                    });
                }
            }, 5);

            // using parallax
            if (option.parallax !== null) {

                setInterval(function() {

                    // スクロール実行
                    if (_translateY > 1) {
                        $elParallax.css({
                            '-webkit-transform':'translate3d(0,-' + (_translateY * _parallaxEasing) + 'px,0)',
                                    'transform':'translate3d(0,-' + (_translateY * _parallaxEasing) + 'px,0)'
                        });
                    }
                }, 5);

            }

        }

        // 実行
        init();

        return(this);
    };

})(jQuery);
