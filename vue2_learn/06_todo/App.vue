<template>
    <div>
        <div id="root">
            <div class="todo-container">
                <div class="todo-wrap">
                    <MyHeader :createTodo="createTodo" />
                    <MyList
                        :todos="todos"
                        :checkTodo="checkTodo"
                        :deleteTodo="deleteTodo"
                    />
                    <MyFooter
                        :todos="todos"
                        :deleteDone="deleteDone"
                        :checkAllTodo="checkAllTodo"
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
            todos: [
                {
                    id: "01",
                    title: "eat",
                    done: false,
                },
                {
                    id: "02",
                    title: "drink",
                    done: true,
                },
                {
                    id: "03",
                    title: "play",
                    done: true,
                },
            ],
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
        checkAllTodo() {
            this.todos.forEach(t=>t.done=true)
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
