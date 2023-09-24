<template>
  <div class="demo">
    <h2>{{ studentName }}</h2>
    <h2>{{ age }}</h2>
    <button @click="showName">show student name</button>
  </div>
</template>
<script>
export default Vue.extend({
  name: "Student",
  data() {
    return {
      studentName: "Zechao",
      age: 29,
    };
  },
  methods: {
    showName() {
      alert(this.studentName);
    },
  },
});
</script>
