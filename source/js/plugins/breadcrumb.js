function customBreadcrumb(breadcrumb, menusTitle) {
    breadcrumb.innerHTML = '';
    // 获取当前页面路径
    var path = window.location.pathname;
    var levels = path.split('/');
    levels.shift(); // 移除第一个空字符串元素
    levels.pop();  // 移除最后一个空字符串元素

    // 生成面包屑导航
    for (var i = 0; i < levels.length; i++) {
        var levelLink = '/';
        for (var j = 0; j <= i; j++) {
            levelLink += levels[j] + '/';
        }
        var levelName = decodeURIComponent(levels[i]);

        if (i === 0) {
            // 查找 menusTitle 中与 levelName 相同的键，并获取对应的值
            var title_obj = menusTitle.find(function (item) {
                return item[levelName] !== undefined;
            });
            var title_value = title_obj ? title_obj[levelName] : null;
            if (!title_value) {
                document.querySelector('.logo').classList.add('last');
                return; // 如果找不到对应的值，直接返回，不执行后续代码
            }
        }
    }
    // 如果代码执行到这里，说明所有的值都能找到，可以继续添加元素到面包屑导航栏
    if (levels.length == 0) {
        document.querySelector('.logo').classList.add('last');
    }
    for (var i = 0; i < levels.length; i++) {
        var levelLink = '/';
        for (var j = 0; j <= i; j++) {
            levelLink += levels[j] + '/';
        }
        var levelName = decodeURIComponent(levels[i]);
        var li = document.createElement('li');
        var a = document.createElement('a');
        if (i === 0) {
            a.textContent = title_value;
        } else {
            a.textContent = levelName;
        }
        if (i == levels.length - 1) {
            li.classList.add('last');
        }
        a.href = levelLink;
        li.appendChild(a);
        breadcrumb.appendChild(li);
    }
}

function postsBreadcrumb(breadcrumb, categories, categoriesLink, categoriesName, categoriesNameLink) {
    breadcrumb.innerHTML = '';
    
    var li = document.createElement('li');
    var a = document.createElement('a');

    a.textContent = categories;
    a.href = categoriesLink;
    li.appendChild(a);
    breadcrumb.appendChild(li);

    li = document.createElement('li');
    a = document.createElement('a');

    a.textContent = categoriesName;
    a.href = categoriesNameLink;
    li.appendChild(a);
    breadcrumb.appendChild(li);

    var path = window.location.pathname;
    var levels = path.split('/');
    levels.shift();
    levels.pop();

    for (var i = 3; i < levels.length; i++) {
        var levelLink = '/';
        for (var j = 0; j <= i; j++) {
            levelLink += levels[j] + '/';
        }
    }

    for (var i = 3; i < levels.length; i++) {
        var levelLink = '/';
        for (var j = 0; j <= i; j++) {
            levelLink += levels[j] + '/';
        }
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.textContent = i > 3 ? '子文章' : '文章';
        if (i == levels.length - 1) {
            li.classList.add('last');
        }
        a.href = levelLink;
        li.appendChild(a);
        breadcrumb.appendChild(li);
    }
}