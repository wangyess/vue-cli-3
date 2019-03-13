const Mock = require('mockjs')
var Random = Mock.Random

// 设置延迟时间
Mock.setup({
  timeout: 1000
})

//设置数据
var defaultData = [];
for (let i = 0; i < 4; i++){
  let obj = {
    'name': Random.cname(),
    'email': Random.email('gmail.com')
  }
  defaultData.push(obj)
}

const getDefaultValue = (option) => {
  window.console.log(option)
  return defaultData
}

Mock.mock('http://www.baia.com/api/getDefaultValue', 'post', getDefaultValue);
