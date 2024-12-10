import { useState } from "react"
import { motion } from "framer-motion"
import VMenu from "../../components/user/VMenu"
import ToolBarUser from "../../components/user/ToolBar"
import CardEvent from "../../components/user/CardEvent"
import PaginatorEvent from "../../components/user/PaginatorEvent"

import reko from "../../assets/reko.png"

const CategoryEvent = () => {
    const [collapsed, setCollapsed] = useState(false)

    const dataEvents = [
        {
            id: 1,
            intitule: "Concert Reko",
            typeEvent: "Musical",
            organisateur: "Media Consulting",
            lieu: "Palais des Sports Mahamasina",
            dateDebut: "Ven",
            jourDebut: "09 Dec",
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
            dateDebut: "Ven",
            jourDebut: "09 Dec",
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
            dateDebut: "Ven",
            jourDebut: "09 Dec",
            heureDebut: "15:00",
            heureFin: "Fin",
            nbreInteresse: "322",
            imgEvent: reko
        },
        {
            id: 4,
            intitule: "Concert Reko",
            typeEvent: "Musical",
            organisateur: "Media Consulting",
            lieu: "Palais des Sports Mahamasina",
            dateDebut: "Ven",
            jourDebut: "09 Dec",
            heureDebut: "15:00",
            heureFin: "Fin",
            nbreInteresse: "322",
            imgEvent: reko
        },
        {
            id: 5,
            intitule: "Concert Reko",
            typeEvent: "Musical",
            organisateur: "Media Consulting",
            lieu: "Palais des Sports Mahamasina",
            dateDebut: "Ven",
            jourDebut: "09 Dec",
            heureDebut: "15:00",
            heureFin: "Fin",
            nbreInteresse: "322",
            imgEvent: reko
        },
        {
            id: 6,
            intitule: "Concert Reko",
            typeEvent: "Musical",
            organisateur: "Media Consulting",
            lieu: "Palais des Sports Mahamasina",
            dateDebut: "Ven",
            jourDebut: "09 Dec",
            heureDebut: "15:00",
            heureFin: "Fin",
            nbreInteresse: "322",
            imgEvent: reko
        }
    ]


    return (

        <div className="custom-bg-home">
            <VMenu collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBarUser collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-2 pb-6`}>
                    <div className="flex flex-row justify-between">
                        <h3 className="font-poppins text-white text-lg">Evénements musicaux</h3>
                    </div>

                    <div className="grid grid-cols-4 gap-x-3 gap-y-4 mb-8">
                        {dataEvents.map((dataEvent, index) => (
                            <CardEvent key={index} event={dataEvent} />
                        ))}
                    </div>

                    <PaginatorEvent />
                </main>
            </motion.div>
        </div>

    )
}

export default CategoryEvent