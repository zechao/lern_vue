import { reactive, onMounted, onUnmounted } from "vue";

export default function () {
    let point = reactive({
        x: 0,
        y: 0,
    });

    function loadPoint(evt) {
        console.log(evt);
        point.x = evt.pageX;
        point.y = evt.pageY;
    }

    onMounted(() => {
        window.addEventListener("click", loadPoint);
    });

    onUnmounted(() => {
        window.removeEventListener("click", loadPoint);
    });

    return point
}
