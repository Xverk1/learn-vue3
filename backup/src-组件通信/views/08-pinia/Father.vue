<template>
  <!-- 结构 -->
  <div class="father">
    <h2>Father</h2>
    <h4>Money: {{ learnPiniaStore.money }}</h4>
    <h4>Money: {{ money }}</h4>
    <h4>BigMoney: {{ bigMoney }}</h4>
    <button @click="increment">Increment Money</button>
    <Child1 />
    <Child2 />
  </div>
</template>

<script lang="ts" setup name="Father">
// 脚本
import { storeToRefs } from "pinia";
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
import { useLearnPiniaStore } from "@/stores/learnPinia";
import { toRefs } from "vue";
const learnPiniaStore = useLearnPiniaStore();
const { money, bigMoney } = storeToRefs(learnPiniaStore);
function increment() {
  learnPiniaStore.increment();
}
</script>

<style scoped>
/* 样式 */
</style>
