<template>
  <div>
    <header class="user_head">
      <div class="login_bg">
        <div class="head_top">
          <a class="aback" href="javascript:void(0)" onclick="history.go(-1)"></a>
          <div class="user_regist">
            <a href="#" class="afff">注册</a>
          </div>

        </div>
        <div class="mlogo">
          <img src="//static.epetbar.com/mpet/images/login/logo.png">
        </div>
        <div class="es_por4">
          <ul id="tags4" class="login_style">
            <li>
              <a href="javascript:void(0)">普通登录</a>
              <i></i>
            </li>
            <li>
              <a href="javascript:void(0)">手机动态密码登录</a>
              <i></i>
            </li>
          </ul>
        </div>

      </div>
    </header>
    <div class="bgfff">
      <div class="mformBox">
        <div id="content">
          <ul class="mform">
            <li>
              <span class="mNumIco"></span>
              <input class="dttext" type="text" placeholder="已注册的手机号">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" placeholder="请输入图片内容" class="dttext" name="varify" id="varify">
              <span style="display:block;position: absolute;top:5px;right:0px;">
                <img src="./seccode.jpg" name="varify" class="codevar" align="absbottom" onclick="">
              </span>
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" class="dttext" placeholder="动态密码" name="code" id="code" style="padding-right:8.5em;">
              <a class="get_phonepass" href="javascript:void(0);" onclick="" id="scodebtn">获取动态密码</a>
              <a class="get_phonepass" style="display:none;margin-right:0px">(
                <d id="stime">60</d>
                )短信已发送</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ftc" style="padding-left: 2em;padding-right: 2em;">
        <a href="https://wap.epet.com/login.html?do=findpassword" class="btn-register ft14 forget pull-right">忘记密码？</a>
      </div>
      <div class="loginbtn" id="Content1_btn" style="display: block;">
        <a href="javascript:void(0)" class="btn-login" style="margin:0 4%">登 录</a></div>
      <div class="ft12 c666 ftc mt5">APP专享:E宠团5折包邮,首单满99送99
        <a href="https://wap.epet.com/download.html?appname=epetmall" class="cblue">去下载</a>
      </div>
      <div class="other-login">
        <div class="ftc friends"><b>合作网站登录</b></div>
        <ul class="uList1">
          <li>
            <a href="#" class="friends_l">
              <img src="./login_ico2.png" alt="">
            </a>
          </li>
          <li>
            <a href="#" class="friends_l">
              <img src="./login_ico4.png" alt="">
            </a>
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
  .user_head
    .login_bg
      width: 100%
      height 177px
      background url('./bg.png') no-repeat
      background-size 100% 100%
      .head_top
        position relative
        height: 50px
        .aback
          display: block
          width: 22px;
          height: 20px;
          position: absolute;
          left 10px
          margin-top: 16px;
          background url(./personal-bico3.png) no-repeat
          background-size 12px 17px
        .user_regist
          height 50px
          width 32px
          line-height 50px
          text-align center
          position absolute
          right 10px

      .mlogo
        height: 83px
        line-height: 83px;
        padding 1em 0 2em
        text-align center
        img
          display: block;
          margin: auto;
          width: 20%;
          vertical-align: middle;
          border none
      .es_por4
        background-color: rgba(255, 255, 255, 0.3);
        .login_style
          height: 44px
          clear-fix()
          li
            display: list-item;
            float: left;
            width: 50%;
            text-align: center;
            height: 44px;
            line-height: 44px;
            position: relative;
            a
              font-size: 15px;
              line-height 44px
              color: #fff;
              display: block;
            i
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              position: absolute;
              bottom: 0px;
              left: 0;
              right: 0;
              margin: auto;

  .bgfff
    background #fff
    overflow hidden
    .mformBox
      height: 138px
      background: #fff;
      border-radius: 0.5em;
      margin: 0 4% 1em 4%;
      padding: 0 1.6%;
      li
        height: 44px
        line-height: 44px;
        border-bottom: #e2e2e2 solid 1px;
        padding: 12px 0 12px 30px;
        position: relative;
        color: #333;

        .mNumIco
          float: left;
          display: inline;
          width: 17px;
          height: 17px;
          background: url(./ico1.png) no-repeat;
          background-size: contain;
          margin: 2px 0 0 -25px;
        .mpasswordIco
          float: left;
          display: inline;
          width: 17px;
          height: 20px;
          margin: 0px 0 0 -25px;
          background: url(./ico4.png) no-repeat;
          background-size: contain;
        .dttext
          display: block;
          height: 21px;
          width: 100%;
          font-size: 15px;
          border: none;
          padding: 0px;
          color: #666;
          font-family: "Microsoft Yahei", tahoma, arial;
          outline: none;

          &::placeholder
            color #aaa
        .get_phonepass
          background: #fff;
          color: #ff4259;
          border: 1px solid #eb4c33;
          position: absolute;
          right: 0;
          top: 0.5em;
          border-radius: 3px;
          width: 100px;
          height 30px
          line-height 20px
          text-align: center;
          padding: 0.3em 0;
          font-size: 13px;

        span
          .codevar
            height 30px
            width 85px
            vertical-align top
            border none

    .ftc
      height: 20px
      text-align: center;
      font-size 14px
      clolr #898989
    /*float right*/
    .loginbtn
      padding-top .5em
      color: #333;
      line-height: 20px;
    .btn-login
      height: 38px
      display block
      letter-spacing 5px
      margin 0 10%
      border-radius: 5px
      background #2ec975
      font-size 15px
      padding .6em 0
      text-align: center;
      color #fff
    .other-login
      padding-top 30px
    .friends
      font-size 16px
      color: #bbb
    .uList1
      clear-fix()
      padding 1.5em 0
      li
        width: 33.3%;
        padding: 0 1.2em;
        float: left;
        display: inline-block
        .friends_l
          display block
          width: 57px
          height: 57px
          img
            width: 100%

</style>
