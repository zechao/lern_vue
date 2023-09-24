<template>
    <div>
        <button @click="isShow = !isShow">view/hide</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">Hello</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Test",
    data() {
        return {
            isShow: true,
        };
    },
};
</script>

<style scoped>
h1 {
    background-color: orange;
}

.hello-enter-active {
    animation: atguigu 0.5s;
}

.hello-leave-active {
    animation: atguigu 1s reverse;
}

@keyframes atguigu {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0%);
    }
}
</style>
