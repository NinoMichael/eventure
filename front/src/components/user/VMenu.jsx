import { Link } from "react-router-dom"
import { Badge } from "primereact/badge"
import { Menu } from "primereact/menu"
import logo from '../../assets/icons/logo-white.png'
import PropTypes from "prop-types"

const VMenu = ({ collapsed, setCollapsed }) => {
    const toggleMenu = () => {
        setCollapsed(!collapsed)
    }

    const itemRenderer = (item) => (
        <div className={`p-menuitem-content ps-4 hover:bg-purpleCustom hover:text-white rounded ${collapsed ? 'justify-center mb-12' : 'mb-7'} transition-all duration-300`}>
            <Link className="flex align-items-center p-menuitem-link text-white py-2" to={item.url}>
                <span className={item.icon} />
                {!collapsed && (
                    <>
                        <span className="mx-2 transition-opacity duration-300">{item.label}</span>
                        {item.badge && <Badge className="ml-auto font-poppins bg-purpleCustom hover:bg-white hover:text-black" value={item.badge} />}
                    </>
                )}
            </Link>
        </div>
    )

    let items = [
        {
            template: () => {
                return (
                    <div className={`cursor-pointer ${collapsed ? "mx-2 my-3" : "my-3"}`} onClick={toggleMenu}>
                        <img src={logo} alt="Logo" width={150} height={150} className={`mx-auto flex justify-center items-center ${collapsed ? 'w-16 h-12' : 'w-24 h-20'} transition-all duration-300`} />
                    </div>
                )
            }
        },
        {
            separator: true
        },
        {
            items: [
                {
                    label: "Accueil",
                    icon: 'pi pi-home',
                    template: itemRenderer,
                    url: '/'
                },
                {
                    label: "Découvrir",
                    icon: 'pi pi-globe',
                    template: itemRenderer,
                    url: '/explore'
                },
                {
                    label: "Historique",
                    icon: 'pi pi-clock',
                    template: itemRenderer,
                    url: '/'
                },
                {
                    label: "Espace",
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer,
                    url: '/discussion',
                },
                {
                    label: "Enregistrement",
                    icon: 'pi pi-bookmark',
                    template: itemRenderer
                },
                {
                    label: "Déconnexion",
                    icon: 'pi pi-sign-out',
                    template: itemRenderer
                }
            ]
        },
        {
            template: () => {
                return (
                    <>
                        {collapsed ? (
                            <></>
                        ) : (
                            <>
                                <p className="text-[0.65em] text-center mt-20 transition-opacity duration-300">Copyright 2024 - Tous droits réservés</p>
                            </>
                        )}
                    </>
                )
            }
        },
    ]

    return (
        <div className={`fixed float-left z-10 ${collapsed ? 'w-[9vw]' : 'w-[17vw]'} transition-all duration-300`}>
            <Menu model={items} className={`w-64 text-white font-poppins text-sm border border-none bg-blackCustom shadow-xl h-[100vh] transition-all duration-300 ${collapsed ? 'w-[5vw]' : 'w-[15vw]'}`} />
        </div>
    )
}

VMenu.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    setCollapsed: PropTypes.func.isRequired
}

export default VMenu
