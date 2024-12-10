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

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [mdp, setMdp] = useState("")
    const [checked, setChecked] = useState(false)

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
            className="custom-bg-home h-[100vh] overflow-hidden"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="mt-6 mx-12 flex justify-between">
                <i
                    className="pi pi-arrow-left text-white cursor-pointer"
                    onClick={() => navigate("/")}
                    title="Revenir"
                ></i>
            </div>

            <motion.main
                className="flex justify-between mx-auto mt-1 shadow-lg rounded-lg w-[65%] h-[85vh] bg-blackCustom"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
            >
                <section className="bg-purpleCustom w-96">
                    <motion.img
                        src={logo}
                        alt="Eventure"
                        className="w-64 h-52 mx-auto items-center flex justify-center mt-32"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
                    />
                </section>

                <section className="px-12 py-4 justify-center bg-blackCustom">
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="font-poppins text-sm bg-transparent text-white"
                                />
                                <label htmlFor="email" className="text-white">
                                    Adresse e-mail
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

                        <div className="flex justify-between space-x-20 mt-6 text-xs">
                            <div>
                                <Checkbox
                                    inputId="rememberMe"
                                    onChange={(e) => setChecked(e.checked)}
                                    checked={checked}
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-white">
                                    Se souvenir de moi
                                </label>
                            </div>

                            <Link to="/forgotten-password" className="mt-1 text-white">
                                Mot de passe oublié ?
                            </Link>
                        </div>

                        <Button
                            label="Se connecter"
                            type="submit"
                            className="bg-purpleCustom text-white mt-10 font-poppins border border-none outline outline-none rounded py-2 w-full"
                        />

                        <div className="relative mt-6">
                            <Divider className="w-[24rem]" />
                            <p className="text-slate-300 font-light text-lg absolute bg-blackCustom p-2 left-40 -top-10">
                                OU
                            </p>
                        </div>

                        <div className="mt-12 flex justify-center items-center mx-auto">
                            <Button
                                label="Se connecter avec Google"
                                className="bg-purpleCustom text-white text-center font-poppins text-sm rounded border border-none outline outline-none py-2 w-full"
                                icon="pi pi-google text-white ms-8"
                            />
                        </div>

                        <p className="text-xs mt-8 text-center text-white">
                            Vous n'avez pas encore de compte ?{" "}
                            <Link to="/home-register" className="font-semibold text-white">
                                Inscrivez-vous
                            </Link>
                        </p>
                    </form>
                </section>
            </motion.main>
        </motion.main>
    )
}

export default Login
