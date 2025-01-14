<template>
  <!-- 结构 -->
  <div class="child1">
    <h2>Child1</h2>
    <h4>Toy: {{ toy }}</h4>
    <button @click="emitter.emit('send-toy', toy)">SendToy</button>
  </div>
</template>

<script lang="ts" setup name="Child1">
// 脚本
import { ref } from 'vue';
import emitter from '@/utils/emitter';
let toy = ref("FUFU")
</script>

<style scoped>
/* 样式 */
</style>
