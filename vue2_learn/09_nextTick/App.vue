<template>
    <div>
        <div id="root">
            <div class="todo-container">
                <div class="todo-wrap">
                    <MyHeader @createTodo="createTodo" />
                    <MyList :todos="todos" />
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
        updateTodo(id, title) {
            this.todos.forEach((todo) => {
                if (todo.id == id) {
                    todo.title = title;
                    return;
                }
            });
        },
    },

    mounted() {
        if (localStorage.todos) {
            this.todos = JSON.parse(localStorage.todos);
        }

        this.$bus.$on("checkTodo", this.checkTodo);
        this.$bus.$on("deleteTodo", this.deleteTodo);
        this.$bus.$on("updateTodo", this.updateTodo);
    },
    beforeDestroy() {
        this.$bus.$off("checkTodo");
        this.$bus.$off("deleteTodo");
        this.$bus.$off("updateTodo", this.updateTodo);
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
<style>
/*base*/
body {
    background: #fff;
}
.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}
.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}
.btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(103, 159, 180);
    margin-right: 5px;
}
.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}
.btn:focus {
    outline: none;
}
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
