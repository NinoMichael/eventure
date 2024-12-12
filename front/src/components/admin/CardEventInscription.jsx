import { Chip } from "primereact/chip"
import { Card } from "primereact/card"
import { TieredMenu } from 'primereact/tieredmenu'
import { useRef } from "react"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"

import PropTypes from "prop-types"

const CardEventInscription = ({ event }) => {
    const navigate = useNavigate()
    const menu = useRef(null)

    const items = [
        {
            label: "Editer",
            icon: 'pi pi-pen-to-square',
        },
        {
            label: "Supprimer",
            icon: 'pi pi-trash',
        },
    ]

    const header = (
        <div className="relative">
            <img alt="Card" src={event.imgEvent} className="w-full h-40 rounded-t" />

            <div className="flex flex-row justify-between">
                <Chip label={event.typeEvent} className="absolute bg-white shadow font-poppins text-xs text-black top-2 left-2 rounded ps-1 pe-1 pb-0 h-7" />
                <i className="pi pi-ellipsis-v text-white absolute top-4 right-2 cursor-pointer" title="Option"
                    onClick={(e) => menu.current.toggle(e)}></i>
                <TieredMenu model={items} popup ref={menu} className="font-poppins text-white bg-blackCustom text-sm" />
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
                    <p className="text-sm text-white"><i className="pi pi-clock me-2 text-purpleCustom"></i>{event.dateDebut} {event.dateFin ? " - " + event.dateFin : ""}</p>
                    <p className="text-sm text-white"><i className="pi pi-clock me-2 text-purpleCustom"></i>{event.heureDebut} - {event.heureFin}</p>
                    <p className="text-sm text-white"><i className="pi pi-users me-2 text-purpleCustom"></i>{event.nbreInteresse} intéressés</p>
                </div>

                <Button label="Séléctionner" onClick={() => navigate('/list-inscription')} className="bg-purpleCustom mt-6 w-full text-white font-poppins text-sm border border-none outline outline-none py-2 px-4 rounded-3xl" />
            </Card>
        </div>
    )
}

CardEventInscription.propTypes = {
    event: PropTypes.shape({
        intitule: PropTypes.string.isRequired,
        typeEvent: PropTypes.string.isRequired,
        organisateur: PropTypes.string.isRequired,
        lieu: PropTypes.string.isRequired,
        dateDebut: PropTypes.string.isRequired,
        dateFin: PropTypes.string.isRequired,
        heureDebut: PropTypes.string.isRequired,
        heureFin: PropTypes.string.isRequired,
        nbreInteresse: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        imgEvent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    }).isRequired,
}

export default CardEventInscription