import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

export default new VueRouter({
    routes: [
        {
            name: "about",
            path: "/about",
            component: About,
        },
        {
            name: "home",
            path: "/home",
            component: Home,
            children: [
                {
                    name: "news",
                    path: "news",
                    component: News,
                },
                {
                    name: "message",
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name: "detail",
                            path: "detail/:id/:message",
                            component: Detail,
                        },
                    ],
                },
            ],
        },
    ],
});
