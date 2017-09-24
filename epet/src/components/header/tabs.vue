<template>
  <div id="tabs" class="dscroll">
    <ul @click="show">
      <li>
        <router-link to="/homepage">去首页 </router-link>
      </li>
      <li>
        <router-link to="/health">去首页2 </router-link>

      </li>
      <li>
        <router-link to="/health">去首页3 </router-link>

      </li>
      <li>
        <router-link to="/health">去首页4 </router-link>

      </li>
      <li>
        <router-link to="/health">去首页5 </router-link>

      </li>
      <li>
        <router-link to="/health">去首页6 </router-link>

      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      setTimeout(function () {
        new BScroll('#tabs',{click:true,scrollX:true})
      },20)
    },
    methods:{
      show(){
        console.log(111)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dscroll
    overflow-x: hidden
    overflow-y:hidden
    width: 100%
    background-color: #fff
    ul
      width: 120%
      white-space nowrap
      display: flex
      li
        float left
        width: 74.5px
        a
          display: block;
          width: 100%;
          height: 100%;
          line-height: 36px;
          font-size: 14px;
          text-align: center;
          color: #666
          &.router-link-active
            color:#459d36
            border-bottom 3px solid #459d36


</style>
