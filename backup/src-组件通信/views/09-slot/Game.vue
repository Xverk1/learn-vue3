<template>
  <!-- 结构 -->
  <div class="game">
    <h2>Game</h2>
    <slot name="g1" :gameList="gameList" :x="1" y="2"></slot>
  </div>
</template>

<script lang="ts" setup name="Game">
import { nanoid } from "nanoid";
import { reactive } from "vue";

// 脚本
let gameList = reactive([
  {
    id: nanoid(),
    title: "Overwatch",
  },
  {
    id: nanoid(),
    title: "Valorant",
  },
  {
    id: nanoid(),
    title: "Counter-Strike",
  },
  {
    id: nanoid(),
    title: "Minecraft",
  },
]);
</script>

<style scoped>
/* 样式 */
.game {
  background-color: #e8f1d7;
  border: 1px solid black;
  padding: 1rem;
  box-shadow: 0 0 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
</style>
