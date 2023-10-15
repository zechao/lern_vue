<template>
    <div>
        <button @click="isShow = !isShow">view/hide</button>
        <!-- <Transition name="slide-fade" apper>
            <h1 v-show="isShow">Hello</h1>
        </Transition> -->

        <TransitionGroup name="slide-fade" appear mode="out-in">
            <h1 v-show="isShow" :key="1">Hello</h1>
            <h1 v-show="!isShow" :key="2">Hello2</h1>
            <h1 v-show="isShow" :key="3">Hello</h1>
            <h1 v-show="!isShow" :key="4">Hello2</h1>
        </TransitionGroup>
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

.slide-fade-leave-active,
.slide-fade-enter-active {
    transition: all 0.8s;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
    transform:  translate(30px, 0);
}

.slide-fade-leave-active {
    position: absolute;
}
</style>
