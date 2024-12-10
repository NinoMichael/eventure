import { useState } from "react"
import { Toolbar } from "primereact/toolbar"
import { Avatar } from "primereact/avatar"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import PropTypes from "prop-types"

const ToolBar = ({ collapsed }) => {
    const [inputSearch, setInputSearch] = useState("")

    const centerContent = (
        <div className="">
            <div className="space-x-6 mt-2">
                <i className="pi pi-bell text-white cursor-pointer" title="Notification"></i>
                <i className="pi pi-cog text-white cursor-pointer" title="Paramètres"></i>
            </div>
        </div>
    )

    const endContent = (
        <div className="mt-7 ms-2">
            <Avatar label="T" className="-mt-12 bg-purpleCustom text-white" size="large" shape="circle" />
        </div>
    )

    return (
        <>
            <header className={`mt-4 flex justify-between ${collapsed ? 'ps-24' : 'ps-64'} pe-6 bg-blackCustom h-[4.75rem]`}>
                <div className="flex flex-row justify-start space-x-12">
                    <div>
                        <h2 className="font-kanit text-2xl text-white">Tableau de bord</h2>
                    </div>

                    <div className="bg-greenCustom">
                        <div className="p-inputgroup flex-1 h-10 mt-4 custom-border-search rounded-3xl">
                            <InputText placeholder="Rechercher" className="w-[25vw] custom-input-search-for-company bg-transparent indent-3 placeholder:text-white border border-none font-poppins text-xs text-white"
                                value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
                            <Button title="Rechercher" icon="pi pi-search" className="text-white me-3 border border-none bg-transparent p-inputgroup-addon outline outline-none" />
                        </div>
                    </div>
                </div>
                <Toolbar center={centerContent} end={endContent} className="bg-blackCustom -mt-4 border border-none outline-none" />
            </header >
        </>
    )
}

ToolBar.propTypes = {
    collapsed: PropTypes.bool.isRequired
}

export default ToolBar
