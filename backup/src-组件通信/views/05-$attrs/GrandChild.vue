<template>
  <!-- 结构 -->
  <div class="grand-child">
    <h2>GrandChild</h2>
    {{ $attrs }}
    <h4>a: {{ a }}</h4>
    <h4>b: {{ b }}</h4>
    <h4>c: {{ c }}</h4>
    <h4>c: {{ c }}</h4>
    <!-- <h4>x: {{ x }}</h4>
    <h4>y: {{ y }}</h4> -->
    <button @click="updateA(6)">点我加Father的a</button>
  </div>
</template>

<script lang="ts" setup name="GrandChild">
// 脚本
defineProps(["a", "b", "c", "d", "updateA"]);
</script>

<style scoped>
/* 样式 */
</style>
