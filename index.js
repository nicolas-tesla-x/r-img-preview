import RImgPreview from './src/r-img-preview.vue'
export default {
  RImgPreview : RImgPreview,
  install (vue, options) {
    vue.component('img-preview', RImgPreview)
  }
}
