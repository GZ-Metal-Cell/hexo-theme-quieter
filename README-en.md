<div align="center">
  <a href="https://github.com/GZ-Metal-Cell/hexo-theme-quieter/" target="_blank" rel="noopener noreferrer">
    <img src="https://hexo-theme-quieter.github.io/2024/11/13/Quieter%20%E4%B8%BB%E9%A2%98%E4%BB%8B%E7%BB%8D/LOGO.webp" alt="LOGO" width="100">
  </a>
</div>


<h3 align="center">Hexo-Theme-Quieter</h3> 

<div align="center">
  <a href="https://hexo.io" target="_blank" rel="noopener noreferrer">
    <img no-fancybox style="display: inline;" alt="hexo" src="https://img.shields.io/badge/hexo-%3E=4.0.0-blue.svg?style=flat-square&logo=hexo&longCache=true">
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
    <img no-fancybox style="display: inline;" alt="node" src="https://img.shields.io/badge/node-%3E=10.9.0-green.svg?style=flat-square&logo=Node.js&longCache=true">
  </a>
  <a href="https://github.com/79e/hexo-theme-quiet/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
    <img no-fancybox style="display: inline;" alt="license" src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square&longCache=true">
  </a>
</div>

![Quieter](https://hexo-theme-quieter.github.io/2024/11/13/Quieter%20%E4%B8%BB%E9%A2%98%E4%BB%8B%E7%BB%8D/Quieter.webp)

[中文](README.md) | **English**

# Introduction

🍓A concise and fully functional Hexo theme developed on the basis of the [Quiet](https://github.com/79e/hexo-theme-quiet) theme.

- Git repository：[GZ-Metal-Cell/hexo-theme-quieter: 🍓 A simple and fully functional Hexo theme, improved based on Hexo theme quiet.](https://github.com/GZ-Metal-Cell/hexo-theme-quieter)

- Demo and Help Page：[Homepage | Hexo-Theme-Quieter](https://hexo-theme-quieter.github.io/)

- Sample template: [Hexo-Theme-Quieter/hexo-theme-quieter-tutorial: Quieter's sample template.](https://github.com/Hexo-Theme-Quieter/hexo-theme-quieter-tutorial)

# Features

- Concise graphic UI design
- Bread crumbs navigation bar
- Waterfall Stream Album
- Sidebar
- Scroll directory (order/collapse)
- AES article fragment encryption
- Day night theme switching
- Mathematical formulas (Mathjax/Katex)
- Comment System (Giscus/Gitalk)
- Code Block Tool
- Word count statistics
- Top of article
- Customize cover style
- Multiple tag syntax support
- Busuanzi statistics
- Baidu Statistics
- fancybox
- Page printing layout
- ...

Multiple plugin adaptation optimization:

- Pin `hexo-generator-index-pin-top`：[netcan/hexo-generator-index-pin-top: Index generator plugin for Hexo. Pin top version](https://github.com/netcan/hexo-generator-index-pin-top)

- Article encryption `hexo-blog-encrypt`：[D0n9X1n/hexo-blog-encrypt: Yet, just another hexo plugin for security.](https://github.com/D0n9X1n/hexo-blog-encrypt)

- Local search `hexo-generator-search`：[wzpan/hexo-generator-search: A plugin to generate search data for Hexo.](https://github.com/wzpan/hexo-generator-search)
- Mermaid charts `hexo-filter-mermaid-diagrams`：[webappdevelp/hexo-filter-mermaid-diagrams: mermaid diagrams for hexo](https://github.com/webappdevelp/hexo-filter-mermaid-diagrams)
- APlayer player `hexo-tag-aplayer`：[MoePlayer/hexo-tag-aplayer: Embed aplayer in Hexo posts/pages](https://github.com/MoePlayer/hexo-tag-aplayer/tree/master)

- Lazyload `hexo-lazyload-image`：[Troy-Yang/hexo-lazyload-image: lazyload image plugin for Hexo.](https://github.com/Troy-Yang/hexo-lazyload-image)

- Hide posts `hexo-hide-posts`：[prinsss/hexo-hide-posts: A plugin to hide specific posts from your Hexo blog and make them only accessible by links. (隐藏 Hexo 文章)](https://github.com/prinsss/hexo-hide-posts)
- ...

# Quick Start

You can directly download the empty template file from [Hexo-Theme-Quieter/hexo-theme-quieter-tutorial: Quieter's sample template.](https://github.com/Hexo-Theme-Quieter/hexo-theme-quieter-tutorial), or choose to install it manually:

## Download the Theme

**Using `git` installation (recommended)**: In the root directory of your Hexo project, run:

```shell
$ git clone https://github.com/GZ-Metal-Cell/hexo-theme-quieter.git themes/Quieter
```

Or **using `npm` installation** (note that using npm will not generate a theme folder in `themes`, but it will be created in `node_modules`):

```shell
npm install hexo-theme-quieter
```

## Configuration

Modify the `_config.yml` file in the root directory of your Hexo project:

- Change the theme to `Quieter`:

```yml
theme: Quieter
```

- Enable code highlighting:

```yml
highlight:
    enable: true
    line_number: false
    auto_detect: false
    tab_replace: ""
    wrap: true
    hljs: true
prismjs:
    enable: false
    preprocess: true
    line_number: true
    tab_replace: ""
```

- Set the number of posts displayed per page to 9 (optional):

```yml
# Home page setting
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
    path: ""
    per_page: 9
    order_by: -date
```

```yml
# Pagination
## Set per_page to 0 to disable pagination
per_page: 9
pagination_dir: page
```

## Install Dependencies

Install the required packages for the theme with the following commands:

```shell
npm i install hexo-renderer-less
npm i hexo-renderer-ejs
```

Switch the rendering engine to [hexo-renderer-kramed](https://github.com/sun11/hexo-renderer-kramed):

```shell
npm uninstall hexo-renderer-marked
npm install hexo-renderer-kramed
```

## Initialize Page Layout

The `_config.yml` file in the theme defines the types of posts displayed in the navigation bar:

```yaml
# Navigation
menus_link:
    home: /  # Home page
    categories: /categories  # Categories
    tags: /tags  # Tags
    archives: /archives  # Archives/Search
    galleries: /galleries  # Galleries page
    links: /links  # Links
    about: /about  # About page
```

If you don't need to display a certain type of link, a simple way is to delete (or comment out) that line.

You should configure the corresponding posts in the `source/` folder.

### Categories Page

Create a folder and file `categories/index.md` under the `source/` folder, and modify its content:

```markdown
---
title: Categories
date: XXXX-XX-XX XX:XX:XX
type: categories
layout: categories
comments: true
aside: true
---
```

### Tags Page

Create a folder and file `tags/index.md` under the `source/` folder, and modify its content:

```markdown
---
title: Tags
date: XXXX-XX-XX XX:XX:XX
layout: "tags"
comments: true
aside: true
---
```

### Links Page

Create a folder and file `links/index.md` under the `source/` folder, and modify its content (below is an example of a links page): 

```markdown
---
title: Links
date: XXXX-XX-XX XX:XX:XX
type: "links"
layout: "links"
comments: true
aside: true
toc: true
---

{% flink %}
- class_name: 'Category 1'
  class_desc: 'Description of Category 1'
  link_list:
    - name: 'Title'
      link: 'URL'
      avatar: 'Icon'
      descr: 'Description'
    - name: 'Title'
      link: 'URL'
      avatar: 'Icon'
      descr: 'Description'
    - name: 'Title'
      link: 'URL'
      avatar: 'Icon'
      descr: 'Description'
- class_name: 'Category 2'
  class_desc: 'Description of Category 2'
  link_list:
    - name: 'Title'
      link: 'URL'
      avatar: 'Icon'
      descr: 'Description'
    - name: 'Title'
      link: 'URL'
      avatar: 'Icon'
      descr: 'Description'
    - name: 'Title'
      link: 'URL'
      avatar: 'Icon'
      descr: 'Description'
{% endflink %}
```

### Gallery Page

For specific configuration, see the help document: [Quieter Gallery Page | Hexo-Theme-Quieter](https://hexo-theme-quieter.github.io/2024/11/14/Quieter%20相册页面/)

### About Page

Create a folder and file `about/index.md` under the `source/` folder, and modify its content (below is an example of an about page):

```markdown
---
title: About
date: XXXX-XX-XX XX:XX:XX
type: "about"
layout: "about"
comments: true
aside: true
---

# About

This is an example of an about page!
```

### 404

Create a file `404.md` under the `source/` folder, and modify its content (below is an example of a 404 page):

```markdown
---
title: 404
date: XXXX-XX-XX XX:XX:XX
type: "404"
layout: "404"
comments: false
rightside: false
picture: "https://gz-metal-cell.github.io/images/404/picture.png"
---
```

### Comment Feature

The theme supports two comment systems: Giscus and Gitalk (only one can be applied). 

#### Giscus (Recommended) 

Obtain the corresponding parameters from [Giscus](https://giscus.app/zh-CN), then configure them in the `Quieter/_config.yml` file in the theme folder: 

```yaml
# Giscus
giscus:
    enable: true  # Only takes effect if true
    repo: 
    repo_id: 
    category: Announcements
    category_id: 
    mapping: title
    strict: 1
    reactions-enabled: 1
    emit_metadata: 0
    input_position: bottom
    # loading: lazy
```

#### Gitalk

Obtain the corresponding parameters from [gitalk/gitalk: Gitalk is a modern comment component based on Github Issue and Preact.](https://github.com/gitalk/gitalk), then configure them in the `Quieter/_config.yml` file in the theme folder:

```yaml
# gitalk
gitalk:
    enable: false
    clientID: # (Replace with) GitHub Application Client ID.
    clientSecret: # (Replace with) GitHub Application Client Secret.
    repo: # (Replace with) GitHub repository.
    owner: # (Replace with) GitHub repository owner, which can be an individual or an organization.
    admin: # (Replace with) GitHub repository owners and collaborators (users with write access to this repository).
```

# More Features

You can get more help and configuration documentation from [Homepage | Hexo-Theme-Quieter](https://hexo-theme-quieter.github.io/).

- [Quieter Theme Configuration | Hexo-Theme-Quieter](https://hexo-theme-quieter.github.io/2024/11/14/Quieter%20主题配置/)
- [Quieter Article Writing | Hexo-Theme-Quieter](https://hexo-theme-quieter.github.io/2024/11/13/Quieter%20文章写作/)
- [Quieter Article Configuration | Hexo-Theme-Quieter](https://hexo-theme-quieter.github.io/2024/11/14/Quieter%20文章配置/)
- [Quieter Photo Album Page | Hexo-Theme-Quieter](https://hexo-theme-quieter.github.io/2024/11/14/Quieter%20相册页面/)
- [Quieter Theme Configuration | Hexo-Theme-Quieter](https://hexo-theme-quieter.github.io/2024/11/14/Quieter%20主题配置/)

# LICENSE

MIT
