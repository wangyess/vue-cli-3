<template>
  <div>
    this is user age: {{age}}
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      name: null,
      age:''
    };
  },
  mounted() {
    this.$bus.$on('showAge', age =>{
      this.age = age
    })
  }
};

</script>

<style>

</style>
