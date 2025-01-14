<template>
  <!-- 结构 -->
  <div class="father">
    <h2>Father</h2>
    <Child1 />
    <Child2 />
  </div>
</template>

<script lang="ts" setup name="Father">
// 脚本
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
</script>

<style scoped>
/* 样式 */
</style>
