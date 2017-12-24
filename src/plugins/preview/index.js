import PreviewComponent from './preview.vue'
var $vm = null
export default {
  install: function (Vue) {
    var Preview = Vue.extend(PreviewComponent)
    if (!$vm) {
      $vm = new Preview({ el: document.createElement('div') })
      document.body.appendChild($vm.$el)
    }
    const preview = {
      open: function (index, list, params) {
        $vm.open(index, list, params)
      },
      close: function () {
        $vm.close()
      }
    }
    Vue.$preview = preview
    Vue.mixin({
      created: function () {
        this.$preview = Vue.$preview
      }
    })
  }
}