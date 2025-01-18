<template>
  <!-- 结构 -->
  <div class="father">
    <h2>Father</h2>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model 用在html标签上 -->
    <!-- <input type="text" v-model="username" /> -->
    <!-- <input
      type="text"
      v-bind:value="username"
      @input="username = (<HTMLInputElement>$event.target).value"
    /> -->

    <!-- v-model 用在组件标签上 -->
    <!-- <Xverk1Input v-model="username"/> -->
    <!-- v-model 用在组件标签上, 原理 -->
    <!-- <Xverk1Input
      :modelValue="username"
      @update:modelValue="username = $event"
    /> -->
    <!-- v-model 用在组件标签上, 多个数据 -->
    <Xverk1Input v-model:ming="username" v-model:mima="password"/>
  </div>
</template>

<script lang="ts" setup name="Father">
// 脚本
import { ref } from "vue";
import Xverk1Input from "./Xverk1Input.vue";
let username = ref("Xverk1");
let password = ref("123456")
</script>

<style scoped>
/* 样式 */
</style>
