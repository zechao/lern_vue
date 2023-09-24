<template>
  <div class="demo">
    <h2>{{ schoolName }}</h2>
    <h2>{{ address }}</h2>
    <button @click="showName">show school name</button>
  </div>
</template>
<script>
export default Vue.extend({
  name: "School",
  data() {
    return {
      schoolName: "UIB",
      address: "Valldemossa",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
});
</script>
<style>
.demo {
  background-color: green;
}
</style>
