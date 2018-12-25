import Vue2Preview from './preview.vue'

export default {
  install(Vue, options) {
    Vue.mixin({
      components: {
        'vue-preview': Vue2Preview
      }
    })
  }
}
