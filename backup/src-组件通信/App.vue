<template>
  <!-- 结构 -->
  <div class="app">
    <h2>App根组件</h2>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup name="App">
// 脚本
</script>

<style>
/* 样式 */
.father,
.child,
.grand-child,
.category {
  border: 1px solid black;
  padding: 1rem;
  box-shadow: 0 0 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
.father {
  background-color: #b5cde9;
}
.child {
  background-color: #9d89c9;
}
.grand-child,
.category {
  background-color: #4be084;
}
button {
  display: block;
  margin-bottom: 1rem;
  /* background: #fff8; */
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 0 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
</style>
