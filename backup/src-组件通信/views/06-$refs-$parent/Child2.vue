<template>
  <!-- 结构 -->
  <div class="child child2">
    <h2>Child2</h2>
    <h4>Computer: {{ computer }}</h4>
    <h4>book: {{ book }}</h4>
  </div>
</template>

<script lang="ts" setup name="Child2">
// 脚本
import { ref, defineExpose } from "vue";
let computer = ref("ROG");
let book = ref(6);

defineExpose({ computer, book });
</script>

<style scoped>
/* 样式 */
</style>
