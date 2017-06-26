# r-img-preview

> A Vue.js project


# 安装

下载 **r-img-preview** 至自己项目的 **node_modules** 之中

## 使用

在 **main.js** 中引入 **preview**

如：

`import imgPreview from 'r-img-preview'`

`Vue.use(imgPreview)`


在需要图片预览的位置用 `<img-preview>` 标签代替 `<img>` 标签

`<img-preview :imgs="imgs"></img-preview>`

# API

| API   | description                   |
|-------|-------------------------------|
| imgs  |  图片的src属性值,是一个字符串数组 |
