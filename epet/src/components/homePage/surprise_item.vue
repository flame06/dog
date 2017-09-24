<template>
  <div id="surprise" class="surprise_item">
    <ul>
      <li>
        <div>
          <a href="#"><img src="./pro_1.jpg" alt=""></a>
          <div class="sur_words">
            <span class="red">$ 92.00</span>
            <p>省￥23.00</p>
          </div>
        </div>

      </li>
      <li>
        <div>
          <a href="#"><img src="./pro_2.jpg" alt=""></a>
          <div class="sur_words">
            <span class="red">$ 92.00</span>
            <p>省￥23.00</p>
          </div>
        </div>

      </li>
      <li>
        <div>
          <a href="#"><img src="./pro_1.jpg" alt=""></a>
          <div class="sur_words">
            <span class="red">$ 92.00</span>
            <p>省￥23.00</p>
          </div>
        </div>

      </li>
      <li>
        <div>
          <a href="#"><img src="./pro_2.jpg" alt=""></a>
          <div class="sur_words">
            <span class="red">$ 92.00</span>
            <p>省￥23.00</p>
          </div>
        </div>

      </li>
      <li>
        <div>
          <a href="#"><img src="./pro_1.jpg" alt=""></a>
          <div class="sur_words">
            <span class="red">$ 92.00</span>
            <p>省￥23.00</p>
          </div>
        </div>

      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  mounted(){
    setTimeout(function () {
      let surpriseScroll = new BScroll(document.getElementById('surprise'),{click:true,scrollX:true})
    },1000)
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
      clear-fix()
      display flex
      white-space nowrap
      li
        float left
        padding 10px
        a
          display block
          img
            width: 98.5714px
            border none

        .sur_words
          text-align center
          .red
            padding 5px 0
            color: red
</style>
