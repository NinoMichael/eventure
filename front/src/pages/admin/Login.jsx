import { useState } from "react"
import { motion } from "framer-motion"
import { FloatLabel } from "primereact/floatlabel"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Checkbox } from "primereact/checkbox"
import { Link } from "react-router-dom"
import { Divider } from "primereact/divider"
import { useNavigate } from "react-router-dom"

import logo from "../../assets/icons/logo-white.png"
import "../../styles/user/Auth.css"

const LoginAdmin = () => {
    const navigate = useNavigate()

    const [identifiant, setIdentifiant] = useState("")
    const [mdp, setMdp] = useState("")

    const pageVariants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: {
            opacity: 1,
            x: "0%",
            transition: { duration: 0.8, ease: "easeInOut" },
        },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.8, ease: "easeInOut" } },
    }

    return (
        <motion.main
            className="bg-blackPure h-[100vh] overflow-hidden"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >

            <motion.main
                className="flex justify-between mx-auto mt-24 shadow-lg rounded-lg w-[65%] h-[65vh] bg-blackCustom"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
            >
                <section className="bg-purpleCustom w-96">
                    <motion.img
                        src={logo}
                        alt="Eventure"
                        className="w-64 h-52 mx-auto items-center flex justify-center mt-20"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
                    />
                </section>

                <section className="pe-24 pt-8 pb-4 justify-center bg-blackCustom">
                    <motion.h1
                        className="text-xl font-semibold text-center text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
                    >
                        Connexion
                    </motion.h1>
                    <motion.p
                        className="mt-3 text-center text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.6 } }}
                    >
                        Veuillez vous connecter à votre compte
                    </motion.p>

                    <form className="mt-8">
                        <div className="p-inputgroup flex-1">
                            <span className="p-inputgroup-addon bg-transparent">
                                <i className="pi pi-envelope text-white"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    type="email"
                                    value={identifiant}
                                    onChange={(e) => setIdentifiant(e.target.value)}
                                    className="font-poppins text-sm bg-transparent text-white"
                                />
                                <label htmlFor="identifiant" className="text-white">
                                    Identifiant
                                </label>
                            </FloatLabel>
                        </div>

                        <div className="p-inputgroup flex-1 mt-7">
                            <span className="p-inputgroup-addon bg-transparent">
                                <i className="pi pi-lock text-white"></i>
                            </span>
                            <FloatLabel>
                                <Password
                                    value={mdp}
                                    onChange={(e) => setMdp(e.target.value)}
                                    className="font-poppins text-sm custom-password"
                                />
                                <label htmlFor="password" className="text-white">
                                    Mot de passe
                                </label>
                            </FloatLabel>
                        </div>

                        <Button
                            label="Se connecter"
                            type="submit"
                            className="bg-purpleCustom text-white mt-10 font-poppins border border-none outline outline-none rounded py-2 w-full"
                        />

                    </form>
                </section>
            </motion.main>
        </motion.main>
    )
}

export default LoginAdmin
