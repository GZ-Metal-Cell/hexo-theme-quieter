/**
 * gallery
 */

'use strict'

const galleryFn = (args, content) => {
    content = hexo.render.renderSync({ text: content, engine: 'yaml' })

    let result = ''

    content.forEach(i => {
        result += `<div class="grid-item"><img no-figcaption src="${i.src}" alt="${i.title}" /></div>`
    })

    return `<div class="grid"><div class="grid-sizer"></div>${result}</div>`
}

hexo.extend.tag.register('gallery', galleryFn, { ends: true })
