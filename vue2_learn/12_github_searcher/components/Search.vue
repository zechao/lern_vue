<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div class="col-md-">
            <input
                style="padding: 5px"
                type="text"
                placeholder="enter the name you search"
                v-model="keyword"
            />&nbsp;
            <button class="btn btn-success" @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    name: "Search",

    data() {
        return {
            keyword: "",
        };
    },
    methods: {
        searchUsers() {
            this.$bus.$emit("update", {
                isFirst: false,
                isLoading: true,
                errMsg: "",
                users: [],
            });
            this.$http
                .get(`https://api.github.com/search/users?q=${this.keyword}`)
                .then(
                    (response) => {
                        this.$bus.$emit("update", {
                            isLoading: false,
                            errMsg: "",
                            users: response.data.items,
                        });
                    },
                    (error) => {
                        this.$bus.$emit("update", {
                            isLoading: false,
                            errMsg: error.message,
                            users: [],
                        });
                    }
                );
        },
    },
};
</script>
