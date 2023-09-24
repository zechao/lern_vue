<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <div class="slot">
            <slot :games="games" name="center"></slot>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: ["title"],
    data(){
        return{
             games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"]
        }
    }
};
</script>

<style scoped>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3 {
    text-align: center;
    background-color: orange;
}

div.slot img {
    width: 100%;
}

div.slot video {
    width: 100%;
}
</style>
