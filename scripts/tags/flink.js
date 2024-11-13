/**
 * flink
 */

'use strict'

const flinkFn = (args, content) => {
    content = hexo.render.renderSync({ text: content, engine: 'yaml' })

    let result = ''

    content.forEach(i => {
        const className = i.class_name ? `${hexo.render.renderSync({ text: '# ' + i.class_name, engine: 'markdown' })}`: '';// `<h1 class="flink-name">${i.class_name}</h1>` : ''
        const classDesc = i.class_desc ? `<p class="class-desc">${i.class_desc}</p>` : ''

        let listResult = ''

        i.link_list.forEach(j => {
            listResult += `
            <div class="flink-list-item">
                <a href="${j.link}" title="${j.name}" target="_blank">
                    <div class="flink-list-item-icon">
                        <img no-lazy no-fancybox no-figcaption src="${j.avatar}"' alt="${j.name}" />
                    </div>
                    <div class="flink-list-item-info">
                        <p class="flink-list-item-info-name">${j.name}</p>
                        <span class="flink-list-item-info-descr">${j.descr}</span>
                    </div>
                </a>
            </div>`
        })

        result += `${className}${classDesc} <div class="flink-list">${listResult}</div>`
    })

    return `<div class="flink">${result}</div>`
}

hexo.extend.tag.register('flink', flinkFn, { ends: true })
