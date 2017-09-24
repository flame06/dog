<template>
    <div class="fixHeader">
      <!--顶部广告-->
      <div class="xiazaibaApp" ref="ad" v-show="isShow">
        <div class="wrapper">
        <span class="closebtn">
          <img src="./closebtn_03.png" alt="关闭广告" @click="closeAd">
        </span>
          <div class="appImg">
            <a href="#" style="display: block;">
              <img src="./dogAD.png">
            </a>
          </div>
        </div>
      </div>
      <!--搜索部分-->
      <div class="headerBox">
        <div class="topFix">
          <div class="address">
            狗站|<a href="#">天津<span class="triangle"></span></a>
          </div>
          <div class="search">
            <a href="#">
              <input type="search" placeholder="搜索商品和品牌">
              <span class="iSearch"></span>
            </a>
          </div>
          <div class="dialog">
            <a href="#">
              <img src="./mydope.png">
            </a>
          </div>
        </div>

    </div>
      <!--tab区域-->
    <tabs></tabs>
  </div>
</template>
<script>
  import tabs from './tabs.vue'
  export default {
    data(){
      return{
        isShow:true
      }
    },

    methods:{
      closeAd(){
        window.alert('不要点我！！')
        this.isShow=false
      }
    },
    components:{
      tabs,
    }
//    computed: {
////      dog () {
////        return this.$store.getters.dog
////      }
//    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus.styl"
  .fixHeader
    /*width: 100%*/
    overflow-x hidden
    position:fixed
    top:0
    z-index 100
    background-color: #fff;

    clear-fix()
    .xiazaibaApp
      position relative
      z-index 100
      background #fff
      display block
      .wrapper
        .closebtn
          display inline-block
          width 5%
          height 50%
          margin-right 2%
          vertical-align middle
          position absolute
          left 2%
          top 50%
          margin-top -2%
          img
            width 100%
        .appImg
          width 100%
          img
            width 100%

    .headerBox
      position relative
      width: 100%
      height 43px
      overflow hidden
      .topFix
        box-sizing border-box
        width 100%
        height 43px
        .address
          width 20%
          float left
          /*background: pink*/
          color #333333
          font-size 14px
          line-height 43px
          a
            color:#333
            font-size 13px
            .triangle
              position: absolute;
              top 21px;
              left 71px;
              border-width: 4px;
              font-size: 0;
              line-height: 0;
              border-style: solid solid dotted;
              border-color: #898989 transparent transparent
        .search
          position relative
          width 55%
          height 43px
          float left
          input
            width: 100%;
            height: 25px;
            line-height 25px
            border: 0;
            background: #e9e9e9;
            border-radius: 4px;
            color: #bcbcbc;
            text-indent: 10px;
            font-size: 13px;
            outline: 0;
            margin-top 9px
          .iSearch
            position absolute
            top:17px
            right 7px
            width: 11px;
            height: 11px;
            background url(./search.png)
            background-size 100% 100%
        .dialog
          width 10%
          float left
          line-height 43px
          img
            width 25px
            margin-left 10px
  /*tab区域*/

</style>
