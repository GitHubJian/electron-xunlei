<template>
  <div class="layout">
    <div class="nav">
      <div class="nav-item nav-item-left"></div>
      <div class="nav-item nav-item-center">
        <ul class="nav-btn">
          <li class="nav-btn-item">
            <div><span>1</span></div>
          </li>
          <li class="nav-btn-item">
            <div><span>2</span></div>
          </li>
          <li class="nav-btn-item">
            <div><span>3</span></div>
          </li>
          <li class="nav-btn-item">
            <div><span>4</span></div>
          </li>
        </ul>
      </div>
      <div class="nav-item nav-item-right">
        <div
          class="login"
          @click="loginClickHandle"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { ipcRenderer } from "electron";

export default {
  data() {
    return {};
  },
  methods: {
    loginClickHandle() {
      let res = ipcRenderer.sendSync("synchronous-message", "login");
      console.log(res);
    }
  }
};
</script>

<style lang="scss">
@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
.layout {
  font-size: 20px;
}
.nav {
  @include clearfix;
  height: 60px;

  .nav-item {
    float: left;
    height: 100%;
  }

  .nav-item-left {
    width: 40%;
  }
  .nav-item-center {
    width: 20%;
    .nav-btn {
      @include clearfix;

      .nav-btn-item {
        float: left;
      }
    }
  }
  .nav-item-right {
    width: 40%;
  }
}

.login {
  width: 100px;
  height: 100px;
  background: red;
}
</style>