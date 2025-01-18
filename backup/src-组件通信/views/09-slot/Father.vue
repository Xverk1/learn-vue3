<template>
  <!-- 结构 -->
  <div class="father">
    <h2>Father</h2>
    <!-- 三个组件, 要求第一个组件无序列表,第二个组件有序列表,第三个组件使用h3标签展示数据 -->
    <Game>
      <template #g1="params">
        <ul>
          <li v-for="game in params.gameList" :key="game.id">
            <h4>Title: {{ game.title }}</h4>
            <p>ID: {{ game.id }}</p>
          </li>
        </ul>
      </template>
    </Game>

    <Game>
      <template v-slot:g1="{ gameList }">
        <ol>
          <li v-for="game in gameList" :key="game.id">
            <h4>Title: {{ game.title }}</h4>
            <p>ID: {{ game.id }}</p>
          </li>
        </ol>
      </template>
    </Game>

    <Game>
      <template #g1="{ gameList }">
        <h4 v-for="game in gameList" :key="game.id">
          Title: {{ game.title }} - ID: {{ game.id }}
        </h4>
      </template>
    </Game>
  </div>
</template>

<script lang="ts" setup name="Father">
import Game from "./Game.vue";

// 脚本
</script>

<style scoped>
/* 样式 */
</style>
