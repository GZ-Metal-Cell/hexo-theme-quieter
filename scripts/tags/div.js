/**
 * div
 * 使用方法：
 * {% div class, id %}
 * 内容
 * {% enddiv %}
 */

'use strict'

const parseArgs = args => {
    return args.join(' ').split(',')
}

const div = (args, content) => {
    const [argsClass = false, argsId = false] = parseArgs(args)
    let divClass = ''
    if (argsClass) {
        divClass = ' class="' + argsClass + '"'
    }
    let divId = ''
    if (argsId) {
        divId = ' id="' + argsId + '"'
    }

    return `<div${divClass}${divId}>${hexo.render.renderSync({ text: content, engine: 'markdown' })}</div>`
}

hexo.extend.tag.register('div', div, { ends: true })
