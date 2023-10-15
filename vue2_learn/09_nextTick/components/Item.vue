<template>
    <div>
        <li @dblclick="handleEdit(todo)">
            <label>
                <input
                    type="checkbox"
                    :checked="todo.done"
                    @click="handleCheck(todo.id)"
                />
                <span v-show="!isEditting"> {{ todo.title }}</span>
                <input
                    ref="input"
                    v-show="isEditting"
                    type="text"
                    :value="todo.title"
                    @blur="handleBlur(todo, $event)"
                />
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">
                删除
            </button>
            <button
                v-show="!isEditting"
                class="btn btn-info"
                @click="handleEdit(todo)"
            >
                编辑
            </button>
        </li>
    </div>
</template>
<script>
export default {
    name: "Item",
    props: ["todo"],
    data() {
        return {
            isEditting: false,
        };
    },
    methods: {
        handleCheck(id) {
            this.$bus.$emit("checkTodo", id);
        },
        handleDelete(id) {
            this.$bus.$emit("deleteTodo", id);
        },
        handleEdit() {
            this.isEditting = true;
            this.$nextTick(function () {
                this.$refs.input.focus();
            });
        },
        handleBlur(todo, e) {
            this.isEditting = false;
            if (!e.target.value.trim()) return alert("empty error");
            this.$bus.$emit("updateTodo", todo.id, e.target.value);
        },
    },
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>
