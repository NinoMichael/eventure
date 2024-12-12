import { useState } from "react"
import VMenu from "../../components/user/VMenu"
import { motion } from "framer-motion"
import ToolBarUser from "../../components/user/ToolBar"
import { Button } from "primereact/button"
import CardEvent from "../../components/user/CardEvent"
import { useNavigate } from "react-router-dom"

import CardCategory from "../../components/user/CardCategory"

import musical from "../../assets/musical.png"
import salon from "../../assets/salon.png"
import reko from "../../assets/reko.png"
import odc from "../../assets/odc.png"
import sportif from "../../assets/sportif.png"
import conference from "../../assets/conference.png"

const Explore = () => {
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate()

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

    const suggestedEvents = [
        {
            id: 1,
            intitule: "L'IA dans les métiers de relation client",
            typeEvent: "Conférence",
            organisateur: "ODC",
            lieu: "Gare Soarano",
            dateDebut: "Jeu",
            jourDebut: "28 Nov",
            heureDebut: "18:00",
            heureFin: "19:30",
            nbreInteresse: "100",
            imgEvent: odc
        },
        {
            id: 2,
            intitule: "L'IA dans les métiers de relation client",
            typeEvent: "Conférence",
            organisateur: "ODC",
            lieu: "Gare Soarano",
            dateDebut: "Jeu",
            jourDebut: "28 Nov",
            heureDebut: "18:00",
            heureFin: "19:30",
            nbreInteresse: "100",
            imgEvent: odc
        },
        {
            id: 3,
            intitule: "L'IA dans les métiers de relation client",
            typeEvent: "Conférence",
            organisateur: "ODC",
            lieu: "Gare Soarano",
            dateDebut: "Jeu",
            jourDebut: "28 Nov",
            heureDebut: "18:00",
            heureFin: "19:30",
            nbreInteresse: "100",
            imgEvent: odc
        },
        {
            id: 4,
            intitule: "L'IA dans les métiers de relation client",
            typeEvent: "Conférence",
            organisateur: "ODC",
            lieu: "Gare Soarano",
            dateDebut: "Jeu",
            jourDebut: "28 Nov",
            heureDebut: "18:00",
            heureFin: "19:30",
            nbreInteresse: "100",
            imgEvent: odc
        },
    ]

    const categoryEvents = [
        {
            id: 1,
            categorie: "Musical",
            imgCategory: musical
        },
        {
            id: 2,
            categorie: "Salon & Foire",
            imgCategory: salon
        },
        {
            id: 3,
            categorie: "Conférence & séminaire",
            imgCategory: conference
        },
        {
            id: 4,
            categorie: "Sport",
            imgCategory: sportif
        }
    ]

    return (
        <div className="custom-bg-home">
            <VMenu collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBarUser collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-7 pb-6`}>
                    <section className="mb-4">
                        <div className="flex flex-row justify-between">
                            <h3 className="font-poppins text-white text-lg">Evénements à venir</h3>
                            <Button label="Voir tout" className="bg-purpleCustom mt-2 text-white font-poppins text-sm border border-none outline outline-none h-8" onClick={() => navigate('/explore/recent-event')} />
                        </div>

                        <div className="flex flex-row space-x-3">
                            {dataEvents.map((dataEvent, index) => (
                                <CardEvent key={index} event={dataEvent} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="flex flex-row justify-between mt-8">
                            <h3 className="font-poppins text-white text-lg">Suggestions pour vous</h3>
                            <Button label="Voir tout" className="bg-purpleCustom mt-2 text-white font-poppins text-sm border border-none outline outline-none h-8" onClick={() => navigate('/explore/suggested-event')} />
                        </div>

                        <div className="flex flex-row space-x-3">
                            {suggestedEvents.map((suggestedEvent, index) => (
                                <CardEvent key={index} event={suggestedEvent} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="flex flex-row justify-between mt-8">
                            <h3 className="font-poppins text-white text-lg">Voir les catégories d'événements</h3>
                        </div>

                        <div className="flex flex-row space-x-4">
                            {categoryEvents.map((categoryEvent, index) => (
                                <CardCategory key={index} categoryEvent={categoryEvent} />
                            ))}
                        </div>
                    </section>

                </main>
            </motion.div>
        </div>
    )
}

export default Explore