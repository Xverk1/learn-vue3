<template>
  <!-- 结构 -->
  <div class="xverk1-input">
    <!-- UI组建库封装原理 -->
    <input
      type="text"
      :value="ming"
      @input="emits('update:ming', (<HTMLInputElement>$event.target).value)"
    />
    <br />
    <input
      type="text"
      :value="mima"
      @input="emits('update:mima', (<HTMLInputElement>$event.target).value)"
    />
  </div>
</template>

<script lang="ts" setup name="Xverk1Input">
// 脚本
import { defineProps, defineEmits } from "vue";
const props = defineProps(["ming", "mima"]);
const emits = defineEmits(["update:ming", "update:mima"]);
</script>

<style scoped>
/* 样式 */
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, #f00, #0f0, #00f);
  height: 30px;
  font-size: 20px;
  color: #fff;
}
</style>
