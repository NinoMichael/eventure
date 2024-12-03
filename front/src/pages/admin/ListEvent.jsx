import { useState } from "react"
import { motion } from "framer-motion"
import ToolBar from "../../components/admin/ToolBar"
import VMenuAdmin from "../../components/admin/VMenuAdmin"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"

import reko from "../../assets/reko.png"
import CardEventAdmin from "../../components/admin/CardEventAdmin"
import PaginatorEventAdmin from "../../components/admin/PaginatorEventAdmin"

const Event = () => {
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate()

    const dataEvents = [
        {
            id: 1,
            intitule: "Concert Reko",
            typeEvent: "Musical",
            organisateur: "Media Consulting",
            lieu: "Palais des Sports Mahamasina",
            dateDebut: "Ven 09 Dec",
            heureDebut: "15:00",
            heureFin: "Fin",
            nbreInteresse: "322",
            imgEvent: reko
        },
        {
            id: 2,
            intitule: "Concert Reko",
            typeEvent: "Musical",
            organisateur: "Media Consulting",
            lieu: "Palais des Sports Mahamasina",
            dateDebut: "Ven 09 Dec",
            dateFin: "Sam 10 Dec",
            heureDebut: "15:00",
            heureFin: "Fin",
            nbreInteresse: "322",
            imgEvent: reko
        },
        {
            id: 3,
            intitule: "Concert Reko",
            typeEvent: "Musical",
            organisateur: "Media Consulting",
            lieu: "Palais des Sports Mahamasina",
            dateDebut: "Ven 09 Dec",
            heureDebut: "15:00",
            heureFin: "Fin",
            nbreInteresse: "322",
            imgEvent: reko
        },
    ]


    return (
        <div className="bg-blackPure">
            <VMenuAdmin collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBar collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-5 pb-8 bg-blackPure`}>
                    <div className="flex flex-row justify-between">
                        <h2 className="font-poppins text-white text-xl">Liste des événements</h2>
                        <Button label="Publier un événement" icon="pi pi-plus" className="bg-purpleCustom mt-3 text-white text-sm border border-none outline outline-none py-0 h-10 px-3 font-poppins"
                            onClick={() => navigate('/add-event')} />
                    </div>
                    <p className="-mt-2 text-white w-[65%]">Consulter les événements que vous avez publié. Vous pouvez interagir à tout moment en fonction de vos besoins</p>

                    <div className="grid grid-cols-4 gap-x-3 gap-y-4 mb-8 mt-12">
                        {dataEvents.map((dataEvent, index) => (
                            <CardEventAdmin key={index} event={dataEvent} />
                        ))}
                    </div>

                    <PaginatorEventAdmin />
                </main>
            </motion.div>
        </div>
    )
}

export default Event