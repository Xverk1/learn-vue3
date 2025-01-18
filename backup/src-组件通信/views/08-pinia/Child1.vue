<template>
  <!-- 结构 -->
  <div class="child child1">
    <h2>Child1</h2>
    <h4>Money: {{ learnPiniaStore.money }}</h4>
    <button @click="increment">Increment Money</button>
  </div>
</template>

<script lang="ts" setup name="Child1">
// 脚本
import { useLearnPiniaStore } from "@/stores/learnPinia";
import { storeToRefs } from "pinia";
const learnPiniaStore = useLearnPiniaStore();
function increment() {
  learnPiniaStore.increment();
}
</script>

<style scoped>
/* 样式 */
</style>
