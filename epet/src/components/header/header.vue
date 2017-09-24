<template>
  <div class="head">
    <div class="ad_top" v-show="false">
      <img class="close" src="./closebtn_03.png" alt="">
      <img src="./dogAD.png" alt="">
    </div>
    <div class="main">
      <div class="search">
        <div class="left">
          <a href="#">狗狗站</a>
          <span>|</span>
          <a href="#">天津<i id="triangle">*</i></a>
        </div>
        <div class="middle">
          <input type="text" placeholder="搜索什么">
          <span></span>
        </div>
        <div class="right">
          <a href="#">
            <img src="./mydope.png" alt="">
          </a>
        </div>
      </div>
      <tabs></tabs>
    </div>

  </div>
</template>

<script>
  import tabs from './tabs.vue'

  export default {
    components:{
      tabs
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus.styl"
.head
  width: 100%
  max-width 667
  background-color: #fff
  position fixed
  z-index 100
  .ad_top
    width: 100%
    img
      width: 100%
    .close
      position absolute
      top: 15px
      left 5px
      width: 17px
      height: 17px
      z-index: 100
      background: url(./closebtn_03.png) no-repeat

  .main
    width: 100%
    .search
      /*background-color: yellow;*/
      clear-fix()
      padding 10px
    .left
      float left
      width: 30%
      text-align center
    .middle
      float: left
      width: 50%
      position: relative
      margin 0 5%
      input
        width: 100%
        height 25px
        border none
        outline: none
        border-radius 8px
        background-color: #eee
      span
        position absolute
        top 8px
        right 5px
        width: 11px
        height: 11px
        background: url('./search.png') no-repeat
        background-size 100% 100%
    .right
      float right
      width: 8%
      img
        width 100%
        vertical-align top
</style>
