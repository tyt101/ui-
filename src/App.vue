<template>
  <div id="app">
    <tyt-switch v-model="active" @change="handleChange" active-color="#13ce66" inactive-color="#000" name="myCheck" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/font/iconfont.css";

.my-input {
  display: inline-block;
  width: 300px;
}
</style>
  