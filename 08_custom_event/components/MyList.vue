<template>
    <div>
        <ul v-for="todo in todos" :key="todo.id" class="todo-main">
            <Item :todo="todo" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        </ul>
    </div>
</template>
<script>
import Item from "./Item.vue";
export default {
    name: "MyList",
    components: { Item },
    props: ["todos", "checkTodo","deleteTodo"],
};
</script>
<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
