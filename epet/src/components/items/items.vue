<template>
  <div>
    <h1>分类页面</h1>

    <epet-footer></epet-footer>
  </div>

</template>

<script>
  import footer from '../footer/footer.vue'

  export default {

    methods: {
      goAnchor(selector) {
        let a = this.$el.querySelector(selector)
        document.body.scrollTop = a.offsetTop
        window.console.log(a.offsetTop)
      }
    },
    components:{
      'epet-footer':footer,
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
