import PreviewComponent from "./preview.vue";

const install = (Vue, options) => {
    if(install.installed) return;

    const Preview = Vue.extend(PreviewComponent);
    const $preview = new Preview({
        el: document.createElement("div")
    });
    document.body.appendChild($preview.$el);
    $preview.init(options);

    Vue.prototype.$preview = {
        open(index, list, params) {
            $preview.open(index, list, params);
        },
        close() {
            $preview.close();
        }
    };
};

export default {
    install
}