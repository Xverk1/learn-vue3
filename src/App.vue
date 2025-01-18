<template>
  <!-- 结构 -->
  <div class="app">
    <h2>App</h2>
    <h4>Sum: {{ sum }}</h4>
    <h4>Sum2: {{ sum2 }}</h4>
    <button @click="changeSum">Sum++</button>
    <button @click="changeSum2">Sum2++</button>
    <hr />
    <h4>Car: {{ car }}</h4>
    <button @click="changeBrand">Change brand</button>
    <button @click="changePrice">Change price</button>
    <button @click="changeColor">Change color</button>
    <button @click="changeEngine">Change engine</button>
    <h4>Car2: {{ car2 }}</h4>
    <button @click="changeBrand2">Change brand</button>
    <button @click="changePrice2">Change price</button>
    <button @click="changeColor2">Change color</button>
    <button @click="changeEngine2">Change engine</button>
  </div>
</template>

<script lang="ts" setup name="App">
// 脚本
import { ref, readonly, reactive, shallowReadonly } from "vue";
let sum = ref(0);
let sum2 = readonly(sum);
let car = reactive({
  brand: "XIAOMI",
  price: 210000,
  options: {
    color: "BLUE",
    engine: "ELECTRONIC",
  },
});
let car2 = shallowReadonly(car)

function changeSum() {
  sum.value++;
}
function changeSum2() {
  sum2.value++; // sum2 无法修改, 因为是只读数据
}
function changeBrand() {
  car.brand = "AUDI";
}
function changePrice() {
  car.price = 500000;
}
function changeColor() {
  car.options.color = "RED";
}
function changeEngine() {
  car.options.engine = "V8";
}
function changeBrand2() {
  car2.brand = "AUDI";
}
function changePrice2() {
  car2.price = 500000;
}
function changeColor2() {
  car2.options.color = "RED";
}
function changeEngine2() {
  car2.options.engine = "V8";
}

</script>

<style scoped>
/* 样式 */
</style>
