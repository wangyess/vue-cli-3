<template>
  <div>
    <p>自由拖动组件开发</p>
    <div class="idv-hr"></div>
    <div class="split-box">
      <splitDiv></splitDiv>
    </div>
  </div>
</template>

<script>
import splitDiv from '@/components/element/splitDiv.vue'
export default {
  name: 'elemnt',
  components: {
    splitDiv
  },
  data() {
    return {

    }
  }
}
</script>

<style>
.idv-hr {
  width: 500px;
  height: 1px;
  background: rgb(206, 206, 206);
  margin: 0 auto;
}
.split-box {
  width: 400px;
  height: 300px;
  background: wheat;
  margin: 10px auto;
}
</style>
