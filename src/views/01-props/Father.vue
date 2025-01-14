<template>
  <!-- 结构 -->
  <div class="father">
    <h2>Father</h2>
    <h4>{{ car }}</h4>
    <Child :car="car" :sendToy="getToy" />
  </div>
</template>

<script lang="ts" setup name="Father">
// 脚本
import { ref } from "vue";
import Child from "./Child.vue";
let car = ref("SU7")

function getToy(val){
  console.log("Father:", val)
}
</script>

<style scoped>
/* 样式 */
</style>
