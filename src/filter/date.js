import moment from 'moment'

export function renderTime (date, deploy = 'YYYY-MM-DD') {
  return moment(date).format(deploy)
}

export function cancelTime (date) {
  console.log()
  console.log(new Date(date))
  return new Date(date).valueOf()
}
