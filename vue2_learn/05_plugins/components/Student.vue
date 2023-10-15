<template>
    <div class="demo">
        <h2>Student name: {{ name|mySlice(3) }}</h2>
        <h2>Student age: {{ age }}</h2>
    </div>
</template>
<script>
export default {
    name: "Student",
    data() {
        return {
            name: "Zechao",
            age: 29,
        };
    }
};
</script>
