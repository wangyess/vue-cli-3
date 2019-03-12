const saveInLocal = store => {
  // 当 store 初始化后调用s

  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))

  store.subscribe((mutation, state) => {
    localStorage.state =JSON.stringify(state)
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  })
}

export default saveInLocal