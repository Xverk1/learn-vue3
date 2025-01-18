<template>
  <!-- 结构 -->
  <div class="child">
    <h2>Child</h2>
    <GrandChild v-bind="$attrs" />
  </div>
</template>

<script lang="ts" setup name="Child">
// 脚本
import GrandChild from "./GrandChild.vue";
</script>

<style scoped>
/* 样式 */
</style>
