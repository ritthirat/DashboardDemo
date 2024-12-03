import moment from 'moment'

export function formattedDate(date: Date): string {
  return moment(date).format('DD/MM/YYYY')
}
