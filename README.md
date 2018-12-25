# Vue preview plugin

> 一个Vue集成[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)图片预览插件，支持 vue-cli2 和 vue-cli3

![](https://img.shields.io/npm/dm/vue2-preview.svg)
![](https://img.shields.io/npm/v/vue2-preview.svg)

## Requirements

[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

## Installation

```bash
npm i vue2-preview -S
```

## Usage

### Install plugin

``` javascript
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
```

### Examples

```jsx
<template>
  <div>
    <div style="height: 1000px; background-color: pink;"></div>
    <vue-preview
      :list="list"
      :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
      :previewBoxStyle="{border: '1px solid #eee'}"
      :tapToClose="true"
      @close="closeHandler"
      @destroy="destroyHandler"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 600
        },
        {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }
      ]
    }
  },
  methods: {
    // 即将关闭的时候，调用这个处理函数
    closeHandler() {
      console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
    }
  }
}
</script>
```

### 参数说明：

| 参数  | 说明  |  类型  |  必需
| :--: | :--: | :--:  | :--:
| list      |图片列表       |   Array  |    是
| thumbImageStyle     |缩略图的样式|   Object |    否
| previewBoxStyle     |缩略图容器的样式|   Object |    否
| tapToClose     |是否允许单击关闭|   Boolean |    否
| close     |监听预览窗口关闭的事件(关闭前触发)|   Function |    否
| destroy     |监听预览窗口销毁的事件(关闭后触发)|   Function |    否

## License

![](https://img.shields.io/badge/license-MIT-blue.svg)
