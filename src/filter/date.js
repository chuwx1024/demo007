import moment from 'moment'

export function renderTime (date, deploy = 'YYYY-MM-DD') {
  return moment(date).format(deploy)
}

export function cancelTime (date) {
  const getTime = Date.parse(date) // 开始时间
  const oneDay = 24 * 3600 * 1000 // 一天时间
  const time = Date.now() // 当前时间
  const rangeTime = getTime + oneDay
  if (rangeTime > time) {
    const newTime = (rangeTime - time) / 1000
    // const days = Math.floor(newTime / (24 * 3600))
    const hour = Math.floor(newTime / 3600)
    const live = newTime % 3600
    const minutes = Math.floor(live / 60)
    const seconds = Math.floor(live % 60)

    console.log('9999999999999999999999')
    // setInterval(() => {
    return `${hour}:${minutes}:${seconds}`
    // }, 1000)
  } else {
    return false
  }
}
