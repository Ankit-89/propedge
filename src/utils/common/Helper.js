import moment from 'moment'

export const getFormatedDate = (date, formate) => {
    if (date === '') {
        return ''
    }
    var displayDate = moment(date).format(formate)
    return displayDate
}
