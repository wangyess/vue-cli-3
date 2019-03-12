const Mock = require('mockjs')

Mock.mock('http://www.bai.comg','get', {
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