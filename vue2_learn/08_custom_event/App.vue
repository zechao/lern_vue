<template>
    <div>
        <div id="root">
            <div class="todo-container">
                <div class="todo-wrap">
                    <MyHeader @createTodo="createTodo" />
                    <MyList
                        :todos="todos"
                        :checkTodo="checkTodo"
                        :deleteTodo="deleteTodo"
                    />
                    <MyFooter
                        :todos="todos"
                        @deleteDone="deleteDone"
                        @checkAllTodo="checkAllTodo"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";
export default {
    name: "App",
    data() {
        return {
            todos: [],
        };
    },
    methods: {
        createTodo(todo) {
            this.todos.unshift(todo);
        },
        checkTodo(id) {
            const idx = this.todos.findIndex((todo) => todo.id === id);
            this.todos.splice(idx, 1, {
                id: this.todos[idx].id,
                title: this.todos[idx].title,
                done: !this.todos[idx].done,
            });
        },
        deleteTodo(id) {
            this.todos = this.todos.filter((t) => t.id !== id);
        },
        deleteDone() {
            this.todos = this.todos.filter((t) => !t.done);
        },
        checkAllTodo(value) {
            this.todos.forEach((t) => (t.done = value));
        },
    },
    mounted() {
        if (localStorage.todos) {
            this.todos = JSON.parse(localStorage.todos);
        }
    },
    watch: {
        todos: {
            handler() {
                localStorage.setItem("todos", JSON.stringify(this.todos));
            },
            deep: true,
        },
    },
    components: { MyHeader, MyList, MyFooter },
};
</script>
<style scoped>
.todo-wrap {
    width: 600px;
}
</style>
