'use strict'

browser.runtime.onMessage.addListener(request => {
  if (request.type === 'height') {
    return Promise.resolve({response: document.body.clientHeight})
  }
})
