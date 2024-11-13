function getTheme(){
    if (localStorage.getItem('theme') !== null) {
        return localStorage.getItem('theme');
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // 检测暗色模式
        return "dark";
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // 检测白天模式
        return "light";
    } else {
        // 用户没有设置偏好或浏览器不支持
        return "light";
    }
}

function setTheme() {
    document.documentElement.setAttribute('data-theme', getTheme());

    // giscus https://blog.jvav.me/posts/change-giscus-theme-at-runtime
    document.querySelectorAll("iframe.giscus-frame")?.forEach(frame => {
        frame.contentWindow.postMessage(
            {
                giscus: {
                    setConfig: {
                        theme: getTheme() === 'light' ? 'light' : 'dark_high_contrast',
                    },
                },
            },
            "https://giscus.app"
        );
    });
}

function setToggleThemeButtonListener() {
    const toggleButton = document.getElementById('js-toggle_theme');
    toggleButton.addEventListener('click', toggleTheme);
    function toggleTheme() {
        localStorage.setItem('theme', getTheme() === 'light' ? 'dark' : 'light');
        setTheme();
    }
}