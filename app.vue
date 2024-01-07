<template>
  <div>
    <h1>Simple Todo List</h1>
  </div>
  <ul>
    <li v-for="todo in baseStore.todos" :key="todo.id">{{ todo.id }} - {{ todo.title }}</li>
  </ul>
</template>
<script setup lang="ts">
const baseStore = useBaseStore()
await baseStore.getTodos()
</script>