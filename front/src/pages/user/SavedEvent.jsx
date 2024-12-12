import { useState } from "react"
import VMenu from "../../components/user/VMenu"
import { motion } from "framer-motion"
import ToolBarUser from "../../components/user/ToolBar"
import CardEvent from "../../components/user/CardEvent"

import reko from "../../assets/reko.png"

const SavedEvent = () => {
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
    ]

    return (
        <div className="custom-bg-home relative h-[100vh]">
            <VMenu collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBarUser collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-7 pb-6 `}>
                    <h1 className="text-white text-lg">Vos événements enregistrés</h1>

                    <div className="flex flex-row space-x-3">
                        {dataEvents.map((dataEvent, index) => (
                            <CardEvent key={index} event={dataEvent} />
                        ))}
                    </div>
                </main>
            </motion.div>
        </div>
    )
}

export default SavedEvent