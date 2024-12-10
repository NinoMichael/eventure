import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import logo from '../../assets/icons/logo-white.png'
import { Button } from "primereact/button"

const HomeRegister = () => {
    const navigate = useNavigate()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
        exit: { opacity: 0, transition: { duration: 0.5 } },
    }

    const sectionVariants = {
        hidden: { x: "-100vw" },
        visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
    }

    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: { type: "spring", stiffness: 300 },
        },
    }

    return (
        <div className="overflow-y-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="custom-bg-home h-[100vh] overflow-y-hidden"
            >
                <div className="mt-8 mx-12 flex justify-start">
                    <motion.i
                        className="pi pi-arrow-left text-white cursor-pointer"
                        onClick={() => navigate('/')}
                        title="Revenir"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                <motion.main
                    className="shadow-lg rounded flex justify-normal mx-auto mt-12 w-[65%] h-[65vh] bg-blackCustom"
                    variants={sectionVariants}
                >
                    <section className="bg-purpleCustom w-[80%]">
                        <motion.img
                            src={logo}
                            alt="Eventure"
                            loading="lazy"
                            className="w-64 h-52 mx-auto items-center flex justify-center mt-24"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </section>

                    <section className="flex flex-col justify-center mx-auto text-center">
                        <motion.h1
                            className="text-2xl text-center font-semibold text-white"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Bienvenue sur <span className="text-2xl font-normal font-courgette">Eventure</span> !
                        </motion.h1>
                        <motion.p
                            className="mt-2 text-center w-full px-20 text-white"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            Rejoignez, explorez, réservez et vivez des expériences inoubliables avec notre plateforme conviviale et intuitive
                        </motion.p>
                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            <Button
                                label="Suivant"
                                onClick={() => navigate('/email-register')}
                                className="border border-none outline-none mx-auto w-96 font-poppins text-sm mt-20 bg-purpleCustom"
                            />
                        </motion.div>
                    </section>
                </motion.main>
            </motion.div>
        </div>
    )
}

export default HomeRegister
