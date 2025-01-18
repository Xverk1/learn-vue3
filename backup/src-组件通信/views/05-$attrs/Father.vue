<template>
  <!-- 结构 -->
  <div class="father">
    <h2>Father</h2>
    <h4>a: {{ a }}</h4>
    <h4>b: {{ b }}</h4>
    <h4>c: {{ c }}</h4>
    <h4>d: {{ d }}</h4>
    <Child :a="a" :b="b" v-bind="{ c, d, x: 100, y: 200 }" :updateA="updateA" />
  </div>
</template>

<script lang="ts" setup name="Father">
// 脚本
import Child from "./Child.vue";
import { ref } from "vue";
let a = ref(1);
let b = ref(2);
let c = ref(3);
let d = ref(4);
function updateA(val:number) {
  a.value += val;
}
</script>

<style scoped>
/* 样式 */
</style>
