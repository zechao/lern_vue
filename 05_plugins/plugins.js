export default {
    install(vue) {
        vue.filter('mySlice',function(value,length=4){
            return value.slice(0,length)
        })
    },
};
