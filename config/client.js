const isLocal = window.location.href.indexOf('debug') !== -1 || false

export default {
  server: (process.env.NODE_ENV === 'development' || isLocal) ? 'http://127.0.0.1:3000/' : '//chat.xiaowuzi.info:3000',
}
