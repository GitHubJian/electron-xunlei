<template>
  <div class="m-pass-form__wrapper">
    <div class="m-form m-pass-form">
      <p class="m-pass-form__logo">用户名密码登录</p>
      <p class="m-form__item">
        <input
          class="m-form__input"
          placeholder="用户名"
          v-model="username"
        >
      </p>
      <p class="m-form__item">
        <input
          class="m-form__input"
          placeholder="密码"
          v-model="password"
        >
      </p>

      <p class="m-form__item">
        <label class="m-form__label">
          <input
            type="checkbox"
            checked
          > 下次自动登录
        </label>
      </p>

      <p class="m-form__item">
        <input
          class="m-form__button__submit"
          type="submit"
          value="登录"
          @click="submitClickHandle"
        >

        <a class="m-button__link">忘记密码？</a>

        <a class="m-button__link sms-btn">短信快捷登录</a>
      </p>
    </div>
    <div class="m-form-footer">
      <div class="m-button__link sm-login">扫码登录</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitClickHandle() {
      console.log(this.username);
    }
  }
};
</script>

<style lang="scss">
.m-form__input {
  display: block;
  position: relative;
  padding: 10px 8px;
  width: 300px;
  height: 40px;
  border: 1px solid #ddd;
  font-size: 14px;
  font-family: inherit;
  outline: 0;
  color: #666;
  transition: 0.3s;

  &.m-form__input__focus {
    border-color: #488ee7;
  }
}

.m-form__label {
  display: inline;
  color: #666;
  font-size: 12px;
  margin-left: 5px;
}

.m-form__button__submit {
  display: block;
  height: 40px;
  line-height: 40px;
  width: 300px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  color: #fff;
  background: #3f89ec;
  border: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  &:focus {
    background-color: #3a84e8;
  }
}

.m-button__link {
  display: inline-block;
  margin-top: 12px;
  font-size: 12px;
  font-size: 12px;
  color: rgb(46, 130, 255);
  font-family: Tahoma, Helvetica, "Microsoft Yahei", 微软雅黑, Arial, STHeiti;
  text-decoration: none;
}

.m-pass-form__wrapper {
  display: inline-block;
  padding-top: 24px;

  .m-pass-form {
    padding: 0 28px;
    width: 356px;
  }

  .m-pass-form__logo {
    padding-left: 118px;
    height: 32px;
    margin-top: 1px;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 46px;
    color: #000;
    background: url(https://passport.baidu.com/passApi/img/loginlogo.png)
      no-repeat left;
  }

  .m-form__item {
    position: relative;
    margin: 0;
    margin-bottom: 16px;
  }

  .m-form-footer {
    position: relative;
    margin-top: 40px;
    padding: 0 28px;
    height: 60px;
    color: #2e82ff;
    line-height: 60px;
    background: #f0f6ff;
  }

  .sms-btn {
    float: right;
    cursor: pointer;
  }

  .sm-login {
    margin-top: 0;
    display: inline-block;
    width: 80px;
    font-size: 14px;
    text-align: left;
  }
}
</style>


