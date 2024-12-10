import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { Dialog } from 'primereact/dialog'

import logo from '../../assets/icons/logo-white.png'

const EmailRegister = () => {
    const navigate = useNavigate()

    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [emailInterface, setEmailInterface] = useState('')
    const [loading, setLoading] = useState(false)

    const handleBack = () => {
        navigate('/')
    }

    const verifyEmail = (e) => {
        setLoading(true)
        setTimeout(() => {
            e.preventDefault()
            setLoading(false)
            setEmailInterface(true)
        }, 1500)
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="custom-bg-home h-[100vh] overflow-y-hidden" >
            <div className="mt-6 mx-12 flex justify-start">
                <i className="pi pi-arrow-left cursor-pointer text-white" onClick={handleBack} title="Revenir"></i>
            </div>

            <main className="shadow-lg rounded flex justify-normal mx-auto mt-10 w-[65%] h-[75vh] bg-blackCustom">
                <section className="bg-purpleCustom w-[60%]">
                    <img src={logo} alt="Eventure" className="w-64 h-52 mx-auto items-center flex justify-center mt-24" />
                </section>

                <section className="flex flex-col justify-center mx-auto text-center bg-blackCustom">
                    <h1 className="text-2xl text-center font-semibold text-white">Inscription</h1>
                    <p className="-mt-2 text-center w-full px-20 text-white">Veuillez renseigner les informations relatives à votre adresse e-mail</p>
                    <Button label="S'inscrire avec Google" icon="pi pi-google ms-8" className="border border-none outlline outline-none mx-auto w-96 font-poppins text-sm mt-3 bg-purpleCustom" />

                    <div className="relative mt-5 mx-auto">
                        <Divider className="w-[24rem]" />
                        <p className="text-slate-300 font-light text-lg absolute bg-blackCustom p-2 left-40 -top-6">OU</p>
                    </div>

                    <form className="mt-5 mx-auto">
                        <section className="flex flex-col mx-20">
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon bg-transparent">
                                    <i className="pi pi-user text-white"></i>
                                </span>
                                <FloatLabel>
                                    <InputText value={nom} onChange={(e) => setNom(e.target.value)} className="font-poppins text-sm bg-transparent text-white" />
                                    <label htmlFor="nom" className="text-white">Nom complet</label>
                                </FloatLabel>
                            </div>

                            <div className="p-inputgroup flex-1 mt-8">
                                <span className="p-inputgroup-addon bg-transparent">
                                    <i className="pi pi-envelope text-white"></i>
                                </span>
                                <FloatLabel>
                                    <InputText type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins text-sm bg-transparent text-white" />
                                    <label htmlFor="email" className="text-white">Adresse e-mail</label>
                                </FloatLabel>
                            </div>
                        </section>

                        <Button label="Suivant" loading={loading} onClick={verifyEmail} className="border border-none outlline outline-none mx-auto w-96 font-poppins text-sm mt-10 mb-4 bg-purpleCustom" />
                        <Dialog visible={emailInterface} modal onHide={() => { if (!emailInterface) return; setEmailInterface(false); }} className="w-[50%] bg-blackCustom">
                            <div className="-mt-4 px-12">
                                <h3 className="font-kanit text-center text-lg mt-4 text-white">Veuiller vérifier votre boîte e-mail</h3>
                                <p className="text-center text-sm font-poppins mt-4 text-white">Nous avons envoyé un email à votre adresse tix@gmail.com. Veuillez vérifier et continuer votre inscription à partir du lien envoyé</p>
                            </div>

                            <p className="text-center text-xs font-poppins mt-4 mb-6 cursor-pointer text-red-600 hover:text-red-700">Vous n'avez pas reçu de code ?</p>
                        </Dialog>
                    </form>
                </section>
            </main>
        </motion.div >
    )
}

export default EmailRegister