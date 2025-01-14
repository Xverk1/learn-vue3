<template>
  <!-- 结构 -->
  <div class="child">
    <h2>Child</h2>
    <button @click="emit('send-toy', toy)">haha</button>
  </div>
</template>

<script lang="ts" setup name="Child">
// 脚本
import { defineEmits, onMounted, ref } from 'vue';
let toy = ref("FUFU")
const emit = defineEmits(["send-toy"])
// onMounted(()=>{
//   setTimeout(()=>{
//     emit("haha")
//   }, 3000)
// })
</script>

<style scoped>
/* 样式 */
</style>
