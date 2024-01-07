
export const useBaseStore = defineStore('baseStore', {
    state: () => ({
        todos:<any> null,
    }),
    actions: {
        async getTodos() {
            const todos = await $fetch('https://jsonplaceholder.typicode.com/todos')
            this.todos = todos
        }
    }
})