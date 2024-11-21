import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "primereact/button"
import { Checkbox } from "primereact/checkbox"
import { FloatLabel } from "primereact/floatlabel"
import { Password } from "primereact/password"
import { Link } from "react-router-dom"

import logo from '../../assets/icons/logo-white.png'
import '../../styles/user/Auth.css'

const PasswordRegister = () => {
    const [mdp, setMdp] = useState('')
    const [mdpConfirm, setMdpConfirm] = useState('')
    const [checked, setChecked] = useState(false)

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="custom-bg-home h-[100vh] overflow-y-hidden">

            <main className="bg-blackCustom shadow-lg rounded flex justify-normal mx-auto mt-20 w-[65%] h-[70vh]">
                <section className="bg-purpleCustom w-[50%]">
                    <img src={logo} alt="Eventure" className="w-64 h-52 mx-auto items-center flex justify-center mt-24" />
                </section>

                <section className="flex flex-col justify-center mx-auto text-center bg-blackCustom">
                    <h1 className="text-2xl text-center font-semibold text-white">Inscription</h1>
                    <p className="-mt-2 text-center w-full px-20 text-white">Veuillez entrer le mot de passe pour votre compte</p>

                    <form className="mt-4 mx-16">
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon bg-transparent">
                                <i className="pi pi-lock text-white"></i>
                            </span>
                            <FloatLabel>
                                <Password value={mdp} onChange={(e) => setMdp(e.target.value)} className="font-poppins text-sm custom-password text-white" />
                                <label htmlFor="password" className="text-white">Mot de passe</label>
                            </FloatLabel>
                        </div>

                        <div className="p-inputgroup flex-1 mt-8">
                            <span className="p-inputgroup-addon bg-transparent">
                                <i className="pi pi-lock text-white"></i>
                            </span>
                            <FloatLabel>
                                <Password value={mdpConfirm} onChange={(e) => setMdpConfirm(e.target.value)} className="font-poppins text-sm custom-password text-white" />
                                <label htmlFor="Confirm password" className="text-white">Confirmer mot de passe</label>
                            </FloatLabel>
                        </div>

                        <div className="justify-start flex mt-6">
                            <Checkbox inputId="accept" onChange={e => setChecked(e.checked)} checked={checked} />
                            <label htmlFor="accept" className="ml-3 text-[0.6em] text-white text-start">J'accepte les <Link to="/use-conditions" className="text-white text-underline">conditions d'utilisation</Link> et les <Link to="/privacy-policy" className="text-white text-underline">politiques de confidentialité</Link></label>
                        </div>

                        <Button label="Soumettre" className="mt-8 font-poppins text-sm border border-none outline outline-none bg-purpleCustom w-full" />
                    </form>
                </section>
            </main>

        </motion.div>
    )
}

export default PasswordRegister