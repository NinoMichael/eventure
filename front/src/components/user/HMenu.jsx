import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { Link, useNavigate } from 'react-router-dom'

import logo from "../../assets/icons/logo-white.png"

const HMenu = () => {
    const navigate = useNavigate()

    const menuItems = [
        {
            label: 'Accueil',
            command: () => navigate('/home')
        },
        {
            label: 'A propos',
            command: () => navigate('/about')
        }
    ]

    const logoContainer = (
        <div>
            <img src={logo} alt="Logo" width={100} height={100} className='w-24 h-20 me-48 ms-12 cursor-pointer' title="Eventure" />
        </div>
    )

    const authBtn = (
        <div className="flex me-20 space-x-3">
            <Link to="/login"><Button label="Se connecter" className="bg-purpleCustom text-white font-poppins border border-none outline outline-none text-sm py-2 px-6" /></Link>
            <Link to="/home-register"><Button label="S'inscrire" className="bg-blackCustom  text-white font-poppins border border-none outline outline-none text-sm py-2 px-6" /></Link>
        </div>
    )

    return (
        <>
            <Menubar model={menuItems} className='custom-menubar font-poppins text-sm text-white ms-16' start={logoContainer} end={authBtn} />
        </>
    )
}


export default HMenu