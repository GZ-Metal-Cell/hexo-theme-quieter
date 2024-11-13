function handleHexoBlogDecryptEvent() {
    console.log("handleHexoBlogDecryptEvent()");
    $(document).ready(function () {
        init();
    });
}

function init() {
    if (typeof initGallery === 'function') {
        initGallery();
    }
    if (typeof initToc === 'function') {
        initToc();
    }
    if (typeof initPhotoFigcaption === 'function') {
        initPhotoFigcaption();
    }
    if (typeof initFancybox === 'function') {
        initFancybox();
    }
    if (typeof initTabs === 'function') {
        initTabs();
    }
    if (typeof initTagHide === 'function') {
        initTagHide();
    }
    if (typeof replaceSpacesWithNbsp === 'function') {
        replaceSpacesWithNbsp();
    }
    if (typeof initMathjax === 'function') {
        initMathjax();
    }
    if (typeof initKatex === 'function') {
        initKatex();
    }
    if (typeof initHighlightTools === 'function') {
        initHighlightTools();
    }
    if (typeof initWordCount === 'function') {
        initWordCount();
    }
    if (typeof initRef === 'function') {
        initRef();
    }
    if (typeof initMermaid === 'function') {
        initMermaid();
    }
}

window.addEventListener('hexo-blog-decrypt', handleHexoBlogDecryptEvent);