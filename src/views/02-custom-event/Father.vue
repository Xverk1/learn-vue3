<template>
  <!-- 结构 -->
  <div class="father">
    <h2>Father</h2>
    <h4 v-if="toy">Toy: {{ toy }}</h4>
    <button @click="test(6,7,$event)">click me</button>
    <Child @send-toy="getToy" />
  </div>
</template>

<script lang="ts" setup name="Father">
// 脚本
import Child from "./Child.vue";
import { defineEmits, onMounted, ref } from 'vue';
let toy = ref("")

function test(a, b, c) {
  console.log("test", a, b, c);
}
function getToy(val){
  toy.value = val
}
</script>

<style scoped>
/* 样式 */
</style>
