# gulp-webpack-multipage-template

基于 Gulp + Webpack 开发和构建 传统多页面静态站点的前端工程化方案，支持ie8+

## 功能
- IE7、8兼容(使用张鑫旭LULU UI组件)
- 前端工程化
- 支持响应式
- 模块化
- 组件化
- 开发、调试和构建
- 集成 PostCSS、Sass

## Installation 安装

```bash
$ https://github.com/3twork/gulp_webpack_mutipage.git <my-project-name>
$ cd <my-project-name>
$ npm i
$ npm run dev //开发环境
$ npm run build //压缩打包
```


## 样式编写规范
```
https://l-ui.com/content/about/design.html 使用张鑫旭大佬的UI组件库 更轻 更简洁美观
```

# 目录结构
```shell

.
── README.md
├── config
│   ├── browserSync.js
│   ├── clean.js
│   ├── config.json
│   ├── css.js
│   ├── default.js
│   ├── deploy.js
│   ├── fonts.js
│   ├── html.js
│   ├── images.js
│   ├── js.js
│   ├── lib
│   │   ├── logger.js
│   │   └── mode.js
│   ├── sizeReport.js
│   ├── static.js
│   ├── svgSprite.js
│   ├── watch.js
│   └── webpack.config.js
├── gulpfile.js
├── package.json
├── src
│   ├── html
│   │   ├── 404.html
│   │   └── templates
│   └── public
│       ├── image
│       ├── js
│       └── sass
└── yarn.lock

```

