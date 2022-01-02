import moment from "moment"
import "moment/locale/es"

moment.locale("es")

const formatDate = date => moment(date).format("MMM YYYY").toUpperCase()

const formatInterval = (startDate, endDate) =>
  moment.duration(moment(endDate.endOf("month")).diff(startDate)).humanize()

export default (...dates) => {
  const momentDates = dates.filter(d => d).map(d => moment(d))
  const formattedDates = momentDates.map(formatDate)

  switch (momentDates.length) {
    case 1:
      return formattedDates[0]
    case 2:
      return `${formattedDates.join(" - ")}    (${formatInterval(
        ...momentDates
      )})`
    default:
      throw new Error("formatInterval only takes 1 or 2 dates")
  }
}
