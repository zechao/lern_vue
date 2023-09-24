<template>
    <div class="container">
        <Category :title="'美食'">
            <img slot="center" src="https://picsum.photos/536/354" alt="" />
            <p slot="footer">test</p>
        </Category>
        <Category :title="'游戏'">
            <template #center="{ games }">
                <ul v-for="(game, idx) in games" :key="idx">
                    <li>{{ game }}</li>
                </ul>
            </template>
        </Category>
        <Category :title="'电影'">
            <template #center>
                <video controls>
                    <source
                    src=http://techslides.com/demos/sample-videos/small.webm
                    type=video/webm>
                </video>
                <h4>more video</h4>
            </template>
            <p slot="footer">Classic Videos</p>
        </Category>
    </div>
</template>
<script>
import Category from "./components/Category.vue";

export default {
    name: "App",
    data() {
        return {
            foods: ["火锅", "烧烤", "小龙虾", "牛排"],
            films: [
                "《教父》",
                "《拆弹专家》",
                "《你好，李焕英》",
                "《尚硅谷》",
            ],
        };
    },

    components: { Category },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
}
</style>
