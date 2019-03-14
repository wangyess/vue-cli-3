<template>
  <div>
    <p>组建count views </p>
    <count-to ref="countBox" :endVal="endVal" :delay="300" @over_value="resultValue">
     <span slot="left">总金额</span>
     <span slot="right">英镑</span>
    </count-to>
    <br>
    <button @click="getValue">获取里面的值</button>
    <button @click="changeValue">改变结束值</button>
  </div>
</template>

<script>
import CountTo from '@/components/count-to'
export default {
  name: 'count_to',
  components: {
    CountTo
  },
  data(){
    return{
      endVal:200
    }
  },
  methods:{
    getValue(){
      window.console.log(this.$refs.countBox.getNumberValue())
    },
    changeValue(){
     this.endVal +=50
    },
    resultValue(val){
      window.console.log("result",val)
    }
  }
}
</script>

<style>
</style>

