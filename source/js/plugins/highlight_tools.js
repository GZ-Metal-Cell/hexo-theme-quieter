function initHighlightTools() {
    var codeBlocks = $('.hljs').closest('pre');

    if (codeBlocks.attr('highlight-tools') != undefined) {
        return;
    } else {
        codeBlocks.attr('highlight-tools', '');
    }

    $(codeBlocks).each(function() {
        var $this = $(this);
        setHighlightHeightLimit($this, HighlightHeightLimit);
        if ($this.children().hasClass('plaintext')) {
            return;
        }
        var $container = createContainer($this);
        createCopyButton($container, $this, copyIcon);
        createCodeLangText($container, $this);
        createCloseCodeBlockButton($container, $this, closeCodeBlockIcon, highlightShrink);
    });
}

function createContainer($codeBlock) {
    // 创建包裹代码块和按钮的容器元素
    var $container = $('<div class="highlight-tools"></div>');
    // 将容器元素插入到代码块之前
    $codeBlock.before($container);
    return $container;
}

function createCopyButton($container, $codeBlock, icon) {
    // 创建复制按钮并设置样式
    var $button = $('<button class="copy-button" type="button" title="copy-button"></button>').css('backgroundImage', 'url("' + icon + '")');
    $container.append($button);

    $button.click(function () {
        // 创建已复制提示文字
        var $span = $('<span class="copy-notice">已复制</span>');
        $container.append($span);
        // 使用innerText获取文本内容，以保留格式
        var code = $codeBlock.get(0).innerText; // 使用.get(0)来获取原生DOM元素
        // 执行复制操作
        var $textarea = $('<textarea>').val(code).appendTo('body').select();
        document.execCommand('copy');
        $textarea.remove();

        // 显示已复制提示，并在 1 秒后隐藏
        $span.css('opacity', 1);
        setTimeout(function () {
            $span.css('opacity', 0);
            setTimeout(function () {
                $span.remove();
            }, 500);
        }, 1000);
    });
}


function createCodeLangText($container, $codeBlock) {
    // 获取代码语言并创建对应的提示文字
    var lang = $codeBlock.find('.hljs').attr('class').replace('hljs ', '').toUpperCase();
    var $span = $('<span class="code-lang">' + lang + '</span>');

    // 将提示文字添加到容器内
    $container.append($span);
}

function createCloseCodeBlockButton($container, $codeBlock, icon, highlightShrink) {
    // 创建关闭代码块按钮并设置样式
    var $button = $('<button class="close-code-block-button" type="button" title="close-code-block-button"></button>').css('backgroundImage', 'url("' + icon + '")');
    $container.append($button);

    if (highlightShrink == 'true') {
        var $hljs = $codeBlock.find('.hljs');
        $button.css('transform', "rotate(-90deg)");
        $hljs.addClass("closed");
    }

    $button.click(function () {
        var $hljs = $codeBlock.find('.hljs');
        if (!$hljs.hasClass('closed')) {
            $button.css('transform', "rotate(-90deg)");
            $hljs.addClass("closed");
        } else {
            $button.css('transform', "rotate(0deg)");
            $hljs.removeClass("closed");
        }
    });
}

function setHighlightHeightLimit($codeBlock, HighlightHeightLimit) {
    // 限制代码块最大长度
    if (HighlightHeightLimit != "") {
        $codeBlock.find('.hljs').css('maxHeight', HighlightHeightLimit);
    }
}