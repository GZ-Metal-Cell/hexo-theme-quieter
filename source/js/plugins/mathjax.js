function initMathjax() {
    $("script[type='math/tex; mode=display']").each(function () {
        $('<p class="test">' + "$$" + $(this).text() + "$$" + "</p>").insertAfter($(this));
        $(this).remove();
    });
    // 创建并添加第一个 <script> 元素
    $('head').append($('<script>').html("MathJax = {tex: {inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]}};"));

    // 创建并添加第二个 <script> 元素
    var $scriptElement2 = $('<script>', {
        id: 'MathJax-script',
        async: true,
        src: mathjax_js // 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
    });
    $('head').append($scriptElement2);
}