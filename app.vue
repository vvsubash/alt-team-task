<template>
  <div class="flex rev-row">
    <select name="locale" id="locale" v-model="locale">
      <option value="en" selected>
        English
      </option>
      <option value="te">
        Telugu
      </option>
    </select>
  </div>
  <div>
    <h1>{{ $t('mainTitle') }}</h1>
  </div>
  <ul>
    <li v-for="todo in baseStore.todos" :key="todo.id" :class="`${todo.completed ? 'strike': ''}`">{{ todo.id }} - {{ todo.title }}</li>
  </ul>
</template>
<script setup lang="ts">
const baseStore = useBaseStore()
await baseStore.getTodos()
const { locale } = useI18n()
</script>
<style>
body {
  max-width: 50ch;
  margin: auto
}
.flex {
  display: flex;
}
.strike {
  text-decoration: line-through;
}

.rev-row {
  justify-content: end;
}
h1 {
  margin-bottom: 2rem;
}
li {
  list-style: none;
}
</style>