<template>
  <!-- 结构 -->
  <div class="child grand-child">
    <h2>GrandChild</h2>
    <h4>Money: {{ money }}</h4>
    <h4>Car: {{ car.brand }}, Price: {{ car.price }}</h4>
    <button @click="updateMoney(6)">Use grandfather's money</button>
  </div>
</template>

<script lang="ts" setup name="GrandChild">
// 脚本
import { ref, inject } from "vue";
let { money, updateMoney } = inject("moneyContext", {
  money: 0,
  updateMoney: (x: number) => {},
});
let car = inject("car", { brand: "unknown", price: 0 });
</script>

<style scoped>
/* 样式 */
</style>
