import moment from 'moment'

export function formattedDate(date: Date): string {
  return moment(date).format('DD/MM/YYYY')
}

export function formattedDateTime(date: Date): string {
  return moment(date).format('DD/MM/YYYY HH:mm:ss')
}
