<template>
  <div>
    this is product
    {{name}}
  </div>
</template>

<script>
export default {
  name: "Product",
  props:{
      name:{
          type:String,
          default:'wangyesss'
      }
  },
  data() {
    return {}
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style>

</style>
