import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

const router = new VueRouter({
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
                    meta: {
                        requireLogin: true,
                    },
                    beforeEnter: (to, from, next) => {
                        if (localStorage.getItem("login") === "true") {
                            next();
                        } else {
                            alert(
                                ` path [${to.path}] require login, you are not logged`
                            );
                            next("/about");
                        }
                    },
                    
                },
                {
                    name: "message",
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name: "detail",
                            path: "detail",
                            component: Detail,
                            props($router) {
                                return {
                                    id: $router.query.id,
                                    message: $router.query.message,
                                };
                            },
                            meta: {
                                requireLogin: true,
                            },
                        },
                    ],
                },
            ],
        },
    ],
});

export default router;
