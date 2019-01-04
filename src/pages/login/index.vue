<template>
  <div>
    <h1>Login</h1>
    <div>
      <label>Username:</label>
      <input
        v-model="username"
        type="text"
      >
    </div>
    <div>
      <label>Password:</label>
      <input
        v-model="password"
        type="password"
      >
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
  }
};
</script>

