import { useState } from "react"
import VMenu from "../../components/user/VMenu"
import { motion } from "framer-motion"
import ToolBarUser from "../../components/user/ToolBar"
import { Button } from "primereact/button"
import { Chip } from "primereact/chip"
import ParticipateDialog from "../../components/user/ParticipateDialog"

import reko from '../../assets/reko.png'

const DetailEvent = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [saved, setSaved] = useState(false)
    const [participateDialog, setParticipateDialog] = useState(false)

    const handleParticipate = () => {
        setParticipateDialog(true)
    }

    return (
        <div className="custom-bg-home relative">
            <VMenu collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBarUser collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-7 pb-6 `}>
                    <section className="rounded grid grid-cols-2 gap-x-10 bg-blackCustom h-full">
                        <div>
                            <img src={reko} alt="Banniere" className="w-full rounded" />
                        </div>

                        <div>
                            <h1 className="text-white text-3xl font-courgette">Concert avec Reko</h1>
                            <p className="text-white font-poppins -mt-6 text-xs">Organisé par Ritsoka Prod</p>
                            <Chip label="Musique" icon="pi pi-microphone text-xs" className="bg-blackPure text-white px-4 py-1 font-poppins text-xs mt-1" />

                            <div className="grid grid-cols-2 gap-x-16 mt-6">
                                <div>
                                    <h3 className="text-neutral-400 text-sm"><i className="pi pi-map-marker me-2 text-sm"></i>Lieu</h3>
                                    <p className="text-white text-sm -mt-3">Palais de de sport Mahamasina</p>
                                </div>

                                <div className="mt-5">
                                    <Button className="font-poppins bg-purpleCustom text-sm text-white border border-none outline outline-none" label="Voir la carte" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-x-16 mt-6">
                                <div>
                                    <h3 className="text-neutral-400 text-sm"><i className="pi pi-calendar me-2 text-sm"></i>Date</h3>
                                    <p className="text-white text-sm -mt-3">Vendredi 09 Décembre</p>
                                </div>

                                <div>
                                    <h3 className="text-neutral-400 text-sm"><i className="pi pi-clock me-2 text-sm"></i>Heure</h3>
                                    <p className="text-white text-sm -mt-3">15:00</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-neutral-400 text-sm"><i className="pi pi-users me-2 text-sm"></i>Places disponibles</h3>
                                <p className="text-white text-sm -mt-3">1000</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-10">
                        <h3 className="text-white"><i className="pi pi-align-left text-sm text-white me-2"></i>A propos de l'événement</h3>
                        <p className="text-white">
                            Le 9 décembre prochain, vivez une soirée inoubliable au Palais des Sports de Mahamasina lors du concert exceptionnel de Reko, organisé par Ritsoka Prod. Cet événement est une célébration unique de la musique contemporaine, mettant en avant le talent et la passion d'un artiste qui a su conquérir le cœur de nombreux fans.
                            Ce concert promet une expérience musicale mémorable avec des performances envoûtantes et une ambiance vibrante. Que vous soyez un fan inconditionnel ou simplement à la recherche d’un moment de divertissement de qualité, ce rendez-vous est fait pour vous.
                            Ne manquez pas cette occasion unique de célébrer la musique et de partager des moments inoubliables avec d'autres passionnés. Que ce soit pour les mélodies envoûtantes, l’énergie débordante de l’artiste ou l’atmosphère conviviale, ce concert promet d’être l’un des temps forts de l’année.
                        </p>
                    </section>
                </main>
            </motion.div>


            <Button
                icon="pi pi-bookmark"
                className={`font-poppins text-lg text-white ${saved ? 'bg-purpleCustom' : 'bg-blackPure'} border-none rounded-full shadow fixed bottom-10 left-64 px-7 py-3 z-50`}
                style={{ position: "fixed" }} onClick={() => setSaved(!saved)}
            />

            <Button
                label="Obtenir un ticket"
                className="font-poppins text-base text-white bg-purpleCustom border-none rounded-3xl shadow fixed bottom-10 right-10 px-8 py-4 z-50"
                style={{ position: "fixed" }} onClick={handleParticipate}
            />
            <ParticipateDialog participateDialog={participateDialog} setParticipateDialog={setParticipateDialog} />
        </div>
    )
}

export default DetailEvent