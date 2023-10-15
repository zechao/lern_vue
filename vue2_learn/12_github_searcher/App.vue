<template>
    <div class="container">
        <Search />
        <List />
    </div>
</template>
<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";

export default {
    name: "App",
    data() {
        return {
            users: [],
        };
    },


    components: { Search, List },
};
// https://api.github.com/search/users?q=zechao
</script>
