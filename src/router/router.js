export default [{
  path: '/',
  name: 'Index',
  component: () => import('@/views/home'),
  children: [{
    path: '/user',
    // 路由别名
    alias: '/admin',
    name: 'User',
    component: () => import('@/components/user')
  },
  {
    // path: '/product',
    path: '/product/:name',
    name: 'Product',
    component: () => import('@/components/product'),
    // props: route => ({
    //     name:route.params.name
    // })
    props: true
  },
  {
    path: '/detail',
    name: 'Deatil',
    component: () => import('@/components/details')
  },
  {
    path: '/mock',
    name: 'PostMock',
    component: () => import('@/components/postMock')
  }
  ]
}]