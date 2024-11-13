function initRef() {
    $('a[href^="#reffn_"], a[href^="#fn_"]').on('click', function (e) {
        e.preventDefault(); // 阻止默认的跳转行为
        var target = $(this).attr('href'); // 获取目标链接
        window.scrollTo({
            top: $(target).offset().top - 70,
            behavior: "smooth"
        });
    });
}