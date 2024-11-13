function initTabs() {
    $('.tabs').each(function () {
        var $navTabs = $(this).find('.nav-tabs');
        var $tabContents = $(this).find('.tab-contents');

        $navTabs.find('button').each(function () {
            $(this).on('click', function () {
                var dataHref = $(this).data('href');

                // 添加 active 类到对应的 tab-item-content
                $tabContents.find('#' + dataHref).addClass('active');

                // 移除其他 tab-item-content 的 active 类
                $tabContents.find('.tab-item-content').not('#' + dataHref).removeClass('active');

                // 添加 active 类到当前按钮
                $(this).addClass('active');

                // 移除其他按钮的 active 类
                $(this).siblings().removeClass('active');
            });
        });
    });
}