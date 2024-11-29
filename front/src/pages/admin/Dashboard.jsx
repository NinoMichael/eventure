import { useState } from "react"
import VMenuAdmin from "../../components/admin/VMenuAdmin"
import { motion } from "framer-motion"
import ToolBar from "../../components/admin/ToolBar"
import CalendarWidget from "./CalendarWidget"
import CardStat from "../../components/admin/CardStat"
import EventStat from "../../components/admin/EventStat"
import { Dropdown } from "primereact/dropdown"
import RegistrationView from "../../components/admin/RegistrationView"
import { Button } from "primereact/button"
import PieRatioStat from "../../components/admin/PieRatioStat"

const DashboardAdmin = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [calendar, setCalendar] = useState(null)

    const [selectedDate, setSelectedDate] = useState(null)
    const dateOptions = [
        { id: 1, epoque: "24 - 01 Dec" },
        { id: 2, epoque: "02 - 09 Dec" },
        { id: 3, epoque: "10 - 17 Dec" },
    ]

    const [selectedLastEvent, setSelectedLastEvent] = useState(null)
    const lastEventOptions = [
        { id: 1, event: "Concert avec Reko" },
        { id: 2, event: "Medley Bessa" },
        { id: 3, event: "Kalon'ny Fahiny" },
    ]

    return (
        <div className="bg-blackPure">
            <VMenuAdmin collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBar collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-7 pb-8 bg-blackPure grid grid-cols-[60%_40%] space-x-20`}>
                    <section>
                        <CardStat />

                        <div className="bg-blackCustom p-4 rounded h-auto mt-8">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <h2 className="text-violet-600 text-lg ms-4">Suivi des événements</h2>
                                    <p className="text-white text-sm w-64 ms-4">Suivez de près les effectifs de vos événements actuels</p>
                                </div>
                                <div>
                                    <Dropdown value={selectedDate} onChange={(e) => setSelectedDate(e.value)} options={dateOptions} optionLabel="epoque"
                                        placeholder={dateOptions[0].epoque} className="w-full md:w-14rem custom-dropdown font-poppins text-xs text-white bg-purpleCustom mt-6 border border-none shadow" panelClassName="font-poppins text-xs bg-purpleCustom text-white" />
                                </div>
                            </div>
                            <EventStat />
                        </div>

                        <div className="bg-blackCustom p-4 rounded h-[27rem] mt-8">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <h2 className="text-violet-600 text-lg ms-4">Ratio d'inscriptions</h2>
                                    <p className="text-white text-sm w-80 ms-4">Visualisez le ration participants confirmés/ inscriptions potentielles des événemnts passés</p>
                                </div>
                                <div>
                                    <Dropdown value={selectedLastEvent} onChange={(e) => setSelectedLastEvent(e.value)} options={lastEventOptions} optionLabel="event"
                                        placeholder={lastEventOptions[0].event} className="w-full md:w-14rem custom-dropdown font-poppins text-xs text-white bg-purpleCustom mt-6 border border-none shadow" panelClassName="font-poppins text-xs bg-purpleCustom text-white" />
                                </div>
                            </div>
                            <PieRatioStat />
                        </div>

                    </section>

                    <section className="-mt-3">
                        <h2 className="text-violet-600 text-lg">Calendrier</h2>
                        <CalendarWidget calendar={calendar} setCalendar={setCalendar} />

                        <div className="mt-5 bg-blackCustom h-auto p-4 rounded">
                            <h3 className="text-violet-600">Inscriptions récentes</h3>
                            <RegistrationView />

                            <Button label="Voir tout" className="flex justify-end ml-auto mt-3 items-end bg-purpleCustom font-poppins text-xs border border-none outline outline-none text-white" />
                        </div>

                        <Button label="Voir d'autres statistiques" className="mt-8 bg-purpleCustom text-white text-sm w-full font-poppins border border-none outline outline-none" />
                    </section>
                </main>
            </motion.div>
        </div>
    )
}

export default DashboardAdmin