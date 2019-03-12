<template>
  <div>
    <br><br>
    <button @click="postData">post 请求 mock</button>
  </div>
</template>

<script>
export default {
  name:'PostMock',
  data(){
    return{

    }
  },
  methods:{
   postData(){
      this.$https.post('http://www.baia.com/api/getDefaultValue')
      .then(res=>{
        window.console.log("result",res)
      })
      .catch(err=>{
        window.console.log('err',err)
      })
    }
  }
}
</script>
