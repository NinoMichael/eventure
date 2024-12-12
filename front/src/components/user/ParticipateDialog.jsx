import { useState } from "react"
import { Dialog } from "primereact/dialog"
import PropTypes from "prop-types"
import { Chip } from "primereact/chip"
import { InputText } from "primereact/inputtext"
import { FloatLabel } from "primereact/floatlabel"
import { Button } from "primereact/button"

import reko from "../../assets/reko.png"

const ParticipateDialog = ({ participateDialog, setParticipateDialog }) => {
    const [nbreReservant, setNbreReservant] = useState("")


    return (
        <Dialog
            className="bg-blackCustom text-white w-[50vw] pb-3 px-8 h-[73vh] rounded -mt-4"
            modal visible={participateDialog} onHide={() => { if (!participateDialog) return; setParticipateDialog(false) }}
            content={({ hide }) => (
                <section>
                    <i className="pi pi-arrow-left cursor-pointer hover:text-purpleCustom text-white mt-5"
                        title="Sortir" onClick={(e) => hide(e)}></i>

                    <div className="ps-8 pe-2">
                        <div className="flex flex-row justify-between">
                            <h3 className="font-poppins text-white">Participer à l'événement</h3>
                        </div>
                        <p className="font-poppins text-white text-xs -mt-3">Consulter les informations vous concernant. Vous pouvez les modifier à tout moment</p>
                    </div>

                    <div className="flex flex-row justify-start mt-10 space-x-8 mx-12">
                        <div>
                            <img src={reko} alt="Banner" className="rounded w-24 h-24 mt-4" />
                        </div>

                        <div className="-mt-4">
                            <h3 className="font-courgette">Concert avec Reko</h3>
                            <Chip label="Musique" icon="pi pi-microphone text-xs" className="bg-blackPure text-white px-4 py-1 font-poppins text-xs -mt-4" />

                            <div className="mt-6">
                                <p className="text-white font-poppins text-xs"><i className="pi pi-map-marker me-2 text-xs"></i>Palais des Sports, Mahamasina</p>
                                <p className="text-white font-poppins text-xs -mt-1"><i className="pi pi-clock me-2 text-xs"></i>Ven 09 Déc - 15:00</p>
                            </div>
                        </div>
                    </div>

                    <form className="mt-8 mx-24">
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon bg-transparent">
                                <i className="pi pi-users text-white"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    value={nbreReservant}
                                    onChange={(e) => setNbreReservant(e.target.value)}
                                    className="font-poppins bg-transparent text-white text-sm"
                                />
                                <label htmlFor="nbreReservant" className="font-poppins text-sm">
                                    Autres participants avec vous
                                </label>
                            </FloatLabel>
                        </div>

                        <Button label="Participer à l'événement" className="bg-purpleCustom mt-6 mb-8 text-white w-full py-3 px-4 rounded-3xl border border-none outline outline-none font-poppins text-sm" />
                    </form>
                </section>
            )}

        />

    )
}

ParticipateDialog.propTypes = {
    participateDialog: PropTypes.bool.isRequired,
    setParticipateDialog: PropTypes.func.isRequired,
}

export default ParticipateDialog