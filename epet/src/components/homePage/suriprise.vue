<template>
  <div id="surprise" class="surprise_item">
    <ul>
      <li>
        <img src="./pro_3.png" alt="">
      </li>
      <li>
        <img src="./pro_3.png" alt="">
      </li>
      <li>
        <img src="./pro_3.png" alt="">
      </li>
      <li>
        <img src="./pro_3.png" alt="">
      </li>
      <li>
        <img src="./pro_3.png" alt="">
      </li>
      <li>
        <img src="./pro_3.png" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    mounted(){
         new BScroll(document.getElementById('surprise'),{click:true,scrollX:true})
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus.styl"
  .surprise_item
    overflow-x: hidden
    overflow-y:  auto
    width: 100%
    ul
      width: 160%
      border 3px solid red
//      clear-fix()
      display flex
      white-space nowrap
      li
        padding 10px
        img
          width: 98px
</style>
