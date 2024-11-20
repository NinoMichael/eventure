import { motion } from "framer-motion"
import HMenu from "../../components/user/HMenu"
import imgPromo from "../../assets/img-promo.png"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"

const Homepage = () => {
    const navigate = useNavigate()

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: (customDelay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: customDelay },
        }),
    }

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
    }

    return (
        <motion.main
            className="custom-bg-home h-[100vh] overflow-hidden"
            initial="hidden"
            animate="visible"
        >
            <HMenu />

            <motion.section
                className="mt-20 flex flex-row justify-between mx-44"
                initial="hidden"
                animate="visible"
            >
                <div className="-mt-3">
                    <motion.h1
                        className="text-white text-3xl font-poppins"
                        variants={variants}
                        custom={0.3}
                    >
                        Bienvenue sur{" "}
                        <span className="font-courgette text-[3rem]">Eventure</span>,
                    </motion.h1>
                    <motion.p
                        className="text-xl text-white -mt-4 italic"
                        variants={variants}
                        custom={0.4}
                    >
                        Là où tous les événements se rassemblent !
                    </motion.p>
                    <motion.p
                        className="text-[1.1em] text-white w-[74%] mt-10"
                        variants={variants}
                        custom={0.5}
                    >
                        Découvrez les événements près de chez vous et au-delà ! Notre
                        plateforme vous connecte à une multitude d'activités, des
                        conférences inspirantes aux fêtes inoubliables. Trouvez, partagez
                        et participez facilement aux moments qui comptent.
                    </motion.p>

                    <motion.div
                        variants={variants}
                        custom={0.6}
                    >
                        <Button
                            label="Commencer"
                            icon="pi pi-arrow-right"
                            className="bg-blackCustom font-poppins text-sm border-none py-3 px-10 rounded-3xl text-white mt-7"
                            onClick={() => navigate('/home-register')}
                        />
                    </motion.div>
                </div>

                <motion.div variants={imageVariants}>
                    <img
                        src={imgPromo}
                        alt="Promo"
                        className="w-[21rem] h-[27rem] -mt-16"
                    />
                </motion.div>
            </motion.section>

            <motion.footer
                className="flex flex-row justify-end me-4 mt-12"
                variants={variants}
                custom={0.7}
            >
                <span className="text-white text-[0.65em]">
                    Copyright 2024 - Tous droits réservés
                </span>
            </motion.footer>
        </motion.main>
    )
}

export default Homepage
