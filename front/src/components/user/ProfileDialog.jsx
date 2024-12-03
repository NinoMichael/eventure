import { useState } from "react"
import { Dialog } from "primereact/dialog"
import PropTypes from "prop-types"
import { Avatar } from "primereact/avatar"
import { InputText } from "primereact/inputtext"

const ProfileDialog = ({ visibleProfile, setVisibleProfile }) => {
    const [identifiant, setIdentifiant] = useState("Tax Andrian")
    const [nom, setNom] = useState("ANDRIANARIDERA Tantely Ny Aina")
    const [email, setEmail] = useState("taxandrian@gmail.com")
    const [contact, setContact] = useState("+261 32 45 678 90")

    return (
        <Dialog
            className="bg-blackCustom text-white w-[60vw] pb-3 px-8 h-[65vh] rounded -mt-4"
            modal visible={visibleProfile} onHide={() => { if (!visibleProfile) return; setVisibleProfile(false) }}
            content={({ hide }) => (
                <section>
                    <i className="pi pi-arrow-left cursor-pointer hover:text-purpleCustom text-white mt-5"
                        title="Sortir" onClick={(e) => hide(e)}></i>

                    <div className="ps-8 pe-2">
                        <div className="flex fle-row justify-between">
                            <h3 className="font-poppins text-white">Votre profil</h3>
                            <i className="pi pi-pen-to-square text-white mt-4 cursor-pointer" title="Editer les informations"></i>
                        </div>
                        <p className="font-poppins text-white text-xs -mt-3">Consulter les informations vous concernant. Vous pouvez les modifier à tout moment</p>
                    </div>

                    <div className="flex flex-row justify-start ps-8 pe-3 mt-7">
                        <div className="relative w-24">
                            <Avatar label="T" shape="circle" size="xlarge" className="text-white bg-purpleCustom" />
                            <i className="pi pi-plus-circle text-white text-base absolute bottom-24 left-12"></i>
                        </div>

                        <section className="w-72 ms-8">
                            <div className="w-full flex flex-row justify-between space-x-5">
                                <div>
                                    <h5 className="font-poppins font-normal text-xs">Identifiant</h5>
                                    <InputText disabled value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} className="font-poppins text-sm text-white bg-transparent border-white -mt-8 h-8 w-64" />
                                </div>
                                <div>
                                    <h5 className="font-poppins font-normal text-xs">Nom</h5>
                                    <InputText disabled value={nom} onChange={(e) => setNom(e.target.value)} className="font-poppins text-sm text-white bg-transparent border-white -mt-8 h-8 w-64" />
                                </div>
                            </div>

                            <div className="w-full flex flex-row justify-between space-x-5">
                                <div>
                                    <h5 className="font-poppins font-normal text-xs">Adresse e-mail</h5>
                                    <InputText disabled value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins text-sm text-white bg-transparent border-white -mt-8 h-8 w-64" />
                                </div>
                                <div>
                                    <h5 className="font-poppins font-normal text-xs">Contact</h5>
                                    <InputText disabled value={contact} onChange={(e) => setContact(e.target.value)} className="font-poppins text-sm text-white bg-transparent border-white -mt-8 h-8 w-64" />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="flex flex-row justify-end mt-16 me-16">
                        <span className="text-red-500 text-end text-xs font-poppins"><i className="pi pi-shield me-2"></i>Changer le mot de passe ?</span>
                    </div>
                </section>
            )}

        />

    )
}

ProfileDialog.propTypes = {
    visibleProfile: PropTypes.bool.isRequired,
    setVisibleProfile: PropTypes.func.isRequired,
}

export default ProfileDialog