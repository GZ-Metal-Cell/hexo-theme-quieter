function initKatex() {
    $("script[type='math/tex; mode=display']").each(function () {
        $('<p class="test">' + "$$" + $(this).text() + "$$" + "</p>").insertAfter($(this));
        $(this).remove();
    });

    const settings = {
        // customised options
        // • auto-render specific keys, e.g.:
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
        ],
        // • rendering keys, e.g.:
        throwOnError: false
    };

    document.addEventListener("DOMContentLoaded", function () {
        renderMathInElement(document.body, settings);
    });

    if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, settings);
    }
}