import { Chip } from "primereact/chip"
import { Card } from "primereact/card"

import PropTypes from "prop-types"

const CardEvent = ({ event }) => {
    const header = (
        <div className="relative">
            <img alt="Card" src={event.imgEvent} className="w-full h-40 rounded-t" />

            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-center absolute bg-white shadow text-black h-[3rem] top-2 left-2 rounded ps-1 pt-4 pe-1 pb-0">
                    <span className="text-[0.7em] text-center font-poppins">{event.dateDebut}</span>
                    <h5 className="font-poppins mt-0 text-center">{event.jourDebut}</h5>
                </div>

                <Chip label={event.typeEvent} className="absolute bg-white shadow font-poppins text-xs text-black top-4 right-2 rounded ps-1 pe-1 pb-0 h-7" />
            </div>
        </div>
    )

    return (
        <div className="card flex justify-center">
            <Card header={header} className="font-poppins bg-blackPure w-64 h-auto">
                <h2 className="text-base font-poppins text-white -mt-5">{event.intitule}</h2>
                <p className=" text-[0.7em] text-white -mt-3"><i className="pi pi-clipboard text-[0.9em] me-2"></i>{event.organisateur}</p>
                <p className=" text-[0.7em] text-white -mt-3"><i className="pi pi-map-marker text-[0.9em] me-2"></i>{event.lieu}</p>

                <div className="mt-2">
                    <p className="text-sm text-white"><i className="pi pi-clock me-2 text-purpleCustom"></i>{event.heureDebut} - {event.heureFin}</p>
                    <p className="text-sm text-white"><i className="pi pi-users me-2 text-purpleCustom"></i>{event.nbreInteresse} intéressés</p>
                </div>
            </Card>
        </div>
    )
}

CardEvent.propTypes = {
    event: PropTypes.shape({
        intitule: PropTypes.string.isRequired,
        typeEvent: PropTypes.string.isRequired,
        organisateur: PropTypes.string.isRequired,
        lieu: PropTypes.string.isRequired,
        dateDebut: PropTypes.string.isRequired,
        jourDebut: PropTypes.string.isRequired,
        heureDebut: PropTypes.string.isRequired,
        heureFin: PropTypes.string.isRequired,
        nbreInteresse: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        imgEvent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    }).isRequired,
}

export default CardEvent