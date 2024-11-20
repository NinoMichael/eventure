import { motion } from "framer-motion"
import HMenu from "../../components/user/HMenu"

import imgPromo from "../../assets/img-promo.png"
import { Button } from "primereact/button"

const Homepage = () => {
    return (
        <motion.main className="custom-bg-home h-[100vh] overflow-hidden">
            <HMenu />

            <section className="mt-20 flex flex-row justify-between mx-44">
                <div className="-mt-3">
                    <h1 className="text-white text-3xl font-poppins">Bienvenue sur <span className="font-courgette text-[3rem]">Eventure</span>,</h1>
                    <p className="text-xl text-white -mt-4 italic">Là où tous les événements se rassemblent !</p>
                    <p className="text-[1.1em] text-white w-[74%] mt-10">Découvrez les événements près de chez vous et au-delà ! Notre plateforme vous connecte à une multitude d'activités, des conférences inspirantes aux fêtes inoubliables. Trouvez, partagez et participez facilement aux moments qui comptent.</p>

                    <Button label="Commencer" icon="pi pi-arrow-right" className="bg-blackCustom font-poppins text-sm border border-none outline outline-none py-3 px-10 rounded-3xl text-white mt-7" />
                </div>

                <div>
                    <img src={imgPromo} alt="Promo" className="w-[21rem] h-[27rem] -mt-16" />
                </div>

            </section>

            <footer className="flex flex-row justify-end me-4 mt-12">
                <span className="text-white text-[0.65em]">Copyright 2024 - Tous droits réservés</span>
            </footer>

        </motion.main>
    )
}

export default Homepage