<template>
  <!-- 结构 -->
  <div class="father">
    <h2>Father</h2>
    <h4>Money: {{ money }}</h4>
    <h4>Car: {{ car.band }}, Price: {{ car.price }}</h4>
    <Child />
  </div>
</template>

<script lang="ts" setup name="Father">
// 脚本
import Child from "./Child.vue";
import { ref, reactive, provide, onMounted } from "vue";
let money = ref(1000000);
let car = reactive({
  brand: "XIAOMI",
  price: 210000,
});
function updateMoney(val: number) {
  money.value -= val;
}
// 向后代提供数据
provide("moneyContext", { money, updateMoney });
provide("car", car);
</script>

<style scoped>
/* 样式 */
</style>
