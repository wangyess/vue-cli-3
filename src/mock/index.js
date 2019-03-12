const Mock = require('mockjs')
const getDefaultValue = (option) => {
  const data = {
    name: 'wangye',
    age:'23'
  }
  window.console.log(option)
  return data
}
Mock.mock('http://www.baia.com/api/getDefaultValue', 'post', getDefaultValue);
Mock.mock('http://www.bai.com', 'get', {
  'list|50-100': [{
    'numId': '@id()',
    'id|+1': 1,
    'roomNo': '@EMAIL(qq.com)',
    'resort': '@cname',
    'age|18-50': 25,
    'roomClass': '@county(true)',
    'yearStr': '@zip',
    'businessDate': "@datetime('yy-MM-dd  HH:mm:ss')",
    'guestType': '@guid()',
    'packageCode': '@boolean()',
  }]
})