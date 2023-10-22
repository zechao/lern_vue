
<template>
    <div>
        <button @click="isShow = true">click me for popup </button>
        <teleport to="body"  >
            <div class="mask" v-if="isShow" >
                <div class="dialog" >
                    <button @click="isShow = false">close popup</button>
                    <h1>Popup data</h1>
                    <p>some data</p>
                </div>
            </div>
        </teleport>
    </div>
</template>
    
<script>
import { ref } from 'vue';



export default {
    name: 'DialogComponent',
    setup() {
        let isShow = ref(false)
        return {
            isShow
        }
    }
}
</script>
    
<style  scoped>
.mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.dialog {
    width: 300px;
    height: 300px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: green;
    position: fixed;
    margin: auto;
}
</style>
    


v