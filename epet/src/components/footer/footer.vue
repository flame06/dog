<template>
  <div>
    <div class="foot">
      <div class="footNav">
        <ul>
          <li>
            <router-link to="/homepage" class="footer_home">
            </router-link>
          </li>
          <li>
            <router-link to="/items" class="footer_item">
            </router-link>
          </li>
          <li>
            <router-link to="/buy" class="footer_buy">
            </router-link>
          </li>
          <li>
            <router-link to="/user" class="footer_user">
            </router-link>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>

  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus.styl"
.foot
  clear-fix()
  .footNav
    position fixed
    bottom 0
    left 0
    width 100%
    height 55px
    background-color: #fff;
    /*background-color: yellow;*/
    ul
      width 100%
      height 55px
      /*border 1px solid red*/
      display: flex
      li
        width 25%
        a
          width 100%
          height 55px
          display block
          &.footer_home
            footer_bg-img('1_sel')
          &.footer_item
            footer_bg-img('2')
          &.footer_buy
            footer_bg-img('3')
          &.footer_user
            footer_bg-img('4')


</style>
