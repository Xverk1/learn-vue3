<template>
  <!-- 结构 -->
  <div class="father">
    <h2>Father</h2>
    <h4>House: {{ house }}</h4>
    <button @click="changeToy">Change Child1's toy</button>
    <br />
    <button @click="changeComputer">Change Child2's computer</button>
    <br />
    <button @click="refsTest($refs)">$refs test</button>
    <br />
    <button @click="changeAllBook($refs)">Change all book</button>
    <Child1 ref="c1" />
    <Child2 ref="c2" />
  </div>
</template>

<script lang="ts" setup name="Father">
// 脚本
import { ref, defineExpose } from "vue";
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
let c1 = ref();
let c2 = ref();
let house = ref(4);

function changeToy() {
  c1.value.toy = "MIKU";
}
function changeComputer() {
  c2.value.computer = "ALIENWARE";
}
function refsTest(refs: object) {
  console.log(refs);
}
function changeAllBook(refs: any) {
  console.log(refs);
  for (let key in refs) {
    // console.log(refs[key])
    refs[key].book += 2;
  }
}

defineExpose({ house });
</script>

<style scoped>
/* 样式 */
</style>
