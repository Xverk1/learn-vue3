<template>
  <!-- 结构 -->
  <div class="child2">
    <h2>Child2</h2>
    <h4>Computer: {{ computer }}</h4>
    <h4>Child1 给的: {{ gift }}</h4>
  </div>
</template>

<script lang="ts" setup name="Child2">
// 脚本
import { ref, onUnmounted } from "vue";
import emitter from "@/utils/emitter";
let computer = ref("ROG")
let gift = ref("")
emitter.on("send-toy", (val:any)=>{
  console.log(val)
  gift.value = val
})
onUnmounted(()=>{
  emitter.off("send-toy")
})
</script>

<style scoped>
/* 样式 */
</style>
