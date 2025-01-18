<template>
  <!-- 结构 -->
  <div class="child">
    <h2>Child</h2>
    <h4>{{ car }}</h4>
    <button @click="sendToy(toy)">Send toy to father</button>
  </div>
</template>

<script lang="ts" setup name="Child">
// 脚本
import { DefineProps, ref } from 'vue';
let toy = ref("FUFU")
defineProps(["car", "sendToy"])
</script>

<style scoped>
/* 样式 */
</style>
