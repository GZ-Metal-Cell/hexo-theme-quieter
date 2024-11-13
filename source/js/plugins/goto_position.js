(function ($) {
    jQuery.fn.gotoPosition = function (opt) {
        var ele = this;
        var win = $(window);
        var doc = $("html,body");
        var defaultOpt = {
            speed: 500,
            iconSpeed: 200,
            animationShow: {
                opacity: "1",
            },
            animationHide: {
                opacity: "0",
            },
        };
        var options = $.extend(defaultOpt, opt);

        ele.click(function () {
            var targetOffset = 0;
            if (opt && opt.target) {
                if (opt.target === "top") {
                    targetOffset = 0; // 跳转至文档顶部
                } else if (opt.target === "bottom") {
                    targetOffset = $(document).height() - win.height(); // 跳转至文档底部
                }
            }
            doc.animate(
                {
                    scrollTop: targetOffset, // 将文档元素滚动到目标位置
                },
                options.speed
            );
        });
    };
})(jQuery);
