<template>
  <!-- 结构 -->
  <div class="child child1">
    <h2>Child1</h2>
    <h4>Toy: {{ toy }}</h4>
    <h4>Book: {{ book }}</h4>
    <button @click="minusHouse($parent)">Minus a Father's house</button>
  </div>
</template>

<script lang="ts" setup name="Child1">
// 脚本
import { ref, defineExpose } from "vue";
let toy = ref("FUFU");
let book = ref(3);

function minusHouse(parent: any) {
  console.log(parent);
  parent.house--;
}

defineExpose({ toy, book });
</script>

<style scoped>
/* 样式 */
</style>
