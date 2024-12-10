import PropTypes from "prop-types"
import { Calendar } from "primereact/calendar"
import { addLocale } from "primereact/api"
import "../../styles/admin/style.css"

addLocale("FR", {
    firstDayOfWeek: 1,
    dayNames: [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
    ],
    dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
    monthNames: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
    ],
    monthNamesShort: [
        "Jan",
        "Fév",
        "Mar",
        "Avr",
        "Mai",
        "Jun",
        "Jul",
        "Aoû",
        "Sep",
        "Oct",
        "Nov",
        "Déc",
    ],
    today: "Aujourd'hui",
    clear: "Effacer",
})

const CalendarWidget = ({ calendar, setCalendar }) => {
    return (
        <Calendar
            value={calendar}
            locale="FR"
            onChange={(e) => setCalendar(e.value)}
            inline
            className="w-[22rem] custom-dash-calendar overflow-hidden h-[22rem]"
        />
    )
}

CalendarWidget.propTypes = {
    calendar: PropTypes.any,
    setCalendar: PropTypes.func.isRequired,
}

CalendarWidget.defaultProps = {
    calendar: null,
}

export default CalendarWidget
