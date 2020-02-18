'use strict'

const onError = error => {
  console.error(`Error: ${error}`)
}

// TODO：名前変更。ソートするのにIDも必要になると思うから取得したいデータが変わってくる
const getClientHeight = tabs => {
  const promises = tabs.map(tab => {
    return browser.tabs.sendMessage(tab.id, {type: 'height'})
      .then(response => Promise.resolve(response.response))
      .catch(onError)
  })

  return Promise.all(promises)
}

const somethingTodo = data => {
  // TODO：ソートをやるかな？
  console.log(data)
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({currentWindow: true,})
    .then(getClientHeight)
    .then(somethingTodo)
    .catch(onError)
})
