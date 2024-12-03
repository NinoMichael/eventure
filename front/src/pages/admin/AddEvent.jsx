import { useState } from "react"
import { motion } from "framer-motion"
import VMenuAdmin from "../../components/admin/VMenuAdmin"
import ToolBar from "../../components/admin/ToolBar"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { Dropdown } from "primereact/dropdown"
import { Checkbox } from "primereact/checkbox"
import { Calendar } from 'primereact/calendar'
import { InputTextarea } from "primereact/inputtextarea"
import { FileUpload } from "primereact/fileupload"
import MapComponent from "../../components/admin/MapComponent"

import '../../styles/admin/addEvent.css'

const AddEvent = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [intitule, setIntitule] = useState("")
    const [selectedType, setSelectedType] = useState('')
    const [checked, setChecked] = useState(false)
    const [checkedEntry, setCheckedEntry] = useState(true)
    const [dateEvent, setDateEvent] = useState("")
    const [datesEvent, setDatesEvent] = useState([])
    const [timeEvent, setTimeEvent] = useState("")
    const [inputLocate, setInputLocate] = useState("")
    const [description, setDescription] = useState("")
    const [nbrePlace, setNbrePlace] = useState(100)
    const [tarif, setTarif] = useState(2000)
    const [isDisabled, setIsDisabled] = useState(false)
    const [imgEvent, setImgEvent] = useState(null)


    const typeOptions = [
        { id: 1, event: "Musical" },
        { id: 2, event: "Culturel" },
        { id: 3, event: "Salon & Foire" },
        { id: 4, event: "Conférence" },
        { id: 5, event: "Atelier" },
        { id: 6, event: "Sport" },
    ]

    const onUpload = (e) => {
        const file = e.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                setImgEvent(event.target.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="bg-blackPure">
            <VMenuAdmin collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBar collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-5 pb-8 bg-blackPure`}>
                    <div className="">
                        <h2 className="font-poppins text-white text-xl">Publier un événement</h2>
                        <p className="-mt-2 text-white w-[65%]">Pour publier un événement, veuillez remplir les informations relatives à l'événement que vous souhaitez organiser et publier. Vous pouvez les modifier à tout moment si besoin</p>
                    </div>

                    <form className="bg-blackCustom pt-3 pb-8 px-12 rounded mt-10">
                        <section className="grid grid-cols-2 gap-x-8">
                            <div>
                                <h4 className="text-base text-white">Nom de l'événement</h4>
                                <div className="flex flex-row -mt-3 space-x-1">
                                    <InputText value={intitule} onChange={(e) => setIntitule(e.target.value)} className="bg-transparent border-white text-white font-poppins text-sm h-9 w-80" />
                                    <Button icon="pi pi-info-circle" className="font-poppins text-sm text-white bg-purpleCustom border border-none outline outline-none px-2 py-1 h-9" />
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm text-white">Type</h4>
                                <Dropdown value={selectedType} onChange={(e) => setSelectedType(e.value)} options={typeOptions} optionLabel="event"
                                    placeholder={typeOptions[0].event} className="w-full md:w-14rem font-poppins text-sm text-white bg-blackPure -mt-1 h-10 border border-none shadow" panelClassName="font-poppins text-sm bg-blackPure text-white" />
                            </div>
                        </section>

                        <section className="mt-10">
                            <h4 className="text-base text-white">Configuration temporelle</h4>
                            <div className="flex flex-row justify-start space-x-40">
                                <div className="-mt-2 cursor-pointer">
                                    <Checkbox inputId="etaler" onChange={e => setChecked(e.checked)} checked={checked} />
                                    <label htmlFor="etaler" className="ml-2 text-white font-poppins text-sm">Etaler l'événément</label>
                                </div>

                                <div className="-mt-8 flex flex-row space-x-2">
                                    <div className="flex flex-row justify-start space-x-2">
                                        <h5 className="font-poppins text-sm font-semibold text-white">Date</h5>
                                        <Calendar
                                            value={checked ? datesEvent : dateEvent}
                                            onChange={(e) => (checked ? setDatesEvent(e.value) : setDateEvent(e.value))}
                                            selectionMode={checked ? "range" : "single"}
                                            showIcon
                                            className="custom-home-calendar h-8 w-[80%] mt-5 cursor-pointer"
                                        />
                                    </div>

                                    <div className="flex flex-row justify-start space-x-2 mt-5">
                                        <p className="font-poppins text-sm text-white mt-1">De</p>
                                        <div className="p-inputgroup flex-1">
                                            <input type="time" name="" id="" className="bg-transparent h-8 w-20 text-white cursor-pointer" />
                                            <span className="p-inputgroup-addon bg-purpleCustom h-8 text-white border-purpleCustom">
                                                <i className="pi pi-clock"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-row justify-start space-x-2 mt-5">
                                        <p className="font-poppins text-sm text-white mt-1">à</p>
                                        <div className="p-inputgroup flex-1">
                                            <input type="time" name="" id="" value={timeEvent} onChange={(e) => setTimeEvent(e.target.value)} className="bg-transparent h-8 w-20 text-white cursor-pointer" />
                                            <span className="p-inputgroup-addon bg-purpleCustom h-8 text-white border-purpleCustom">
                                                <i className="pi pi-clock"></i>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <section className="mt-10 grid grid-cols-2 gap-x-8">
                            <div>
                                <h4 className="text-base text-white">Configuration spatiale</h4>
                                <div className="p-inputgroup flex-1 h-10 -mt-1 custom-border-search rounded-3xl w-96">
                                    <InputText placeholder="Entrer un lieu" className="w-[25vw] custom-input-search-for-company bg-transparent indent-3 placeholder:text-white border border-none font-poppins text-xs text-white"
                                        value={inputLocate} onChange={(e) => setInputLocate(e.target.value)} />
                                    <Button title="Localiser" icon="pi pi-map-marker" className="text-white me-3 border border-none bg-transparent p-inputgroup-addon outline outline-none" />
                                </div>

                                <div className="mt-6 me-44 h-80 w-96">
                                    <MapComponent />
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm text-white"><i className="pi pi-align-left text-sm me-2"></i>Description</h4>
                                <InputTextarea autoResize value={description} onChange={(e) => setDescription(e.target.value)} rows={20} cols={35}
                                    className="bg-transparent text-sm text-white font-poppins border-white" placeholder="Ecrivez votre texte ici" />
                            </div>
                        </section>

                        <div className="mt-12 grid grid-cols-2 gap-x-8">
                            <div>
                                <FileUpload mode="basic" name="demo[]" accept="image/*" maxFileSize={1000000} customUpload auto uploadHandler={onUpload} className="invisible" />
                                {
                                    imgEvent ? (
                                        <div className="relative">
                                            <img src={imgEvent} alt="Affiche" className="h-[35vh] w-[80%] object-contain -mt-8 rounded" />
                                            <i className="pi pi-times text-white absolute -top-8 right-2 hover:text-purpleCustom cursor-pointer" title="Retirer l'image"
                                                onClick={() => setImgEvent(null)}></i>
                                        </div>
                                    ) : (
                                        <div className="bg-transparent cursor-pointer -mt-8 ms-2 h-[35vh] w-[80%] border border-dashed border-white rounded p-4 flex flex-col justify-center items-center mx-auto"
                                            onClick={() => document.querySelector('.p-fileupload-choose input').click()}>
                                            <p>
                                                <i className="pi pi-plus text-white text-center text-lg"></i>
                                            </p>
                                            <p className="text-white font-poppins text-sm -mt-2">Ajouter une affiche</p>
                                        </div>
                                    )
                                }
                            </div>

                            <div>
                                <div>
                                    <h4 className="text-sm font-poppins text-white"><i className="pi pi-users text-white text-xs me-2"></i>Nombre de places disponibles</h4>
                                    <div className="flex flex-row space-x-2">
                                        <div className="bg-purpleCustom shadow rounded p-1 h-6 mt-1 cursor-pointer">
                                            <i className="pi pi-minus text-white"></i>
                                        </div>
                                        <InputText value={nbrePlace} onChange={(e) => setNbrePlace(e.target.value)} className="w-36 bg-transparent text-white h-8 border-white font-poppins" />
                                        <div className="bg-purpleCustom shadow rounded p-1 h-6 mt-1 cursor-pointer">
                                            <i className="pi pi-plus text-white"></i>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="text-sm font-poppins text-white mt-12">Entrée</h4>
                                <div className="flex flex-row">
                                    <div className="flex flex-row space-x-16">
                                        <div className="-mt-1 cursor-pointer">
                                            <Checkbox inputId="libre" onChange={e => setCheckedEntry(e.checked)} checked={checkedEntry} />
                                            <label htmlFor="libre" className="ml-2 text-white font-poppins text-sm">Libre</label>
                                        </div>

                                        <div className="flex flex-row -mt-3 space-x-4" aria-disabled>
                                            <h6 className="font-normal font-poppins text-sm mt-2 text-white">Régler le tarif à : </h6>
                                            <div className="flex flex-row space-x-2">
                                                <div className="bg-purpleCustom shadow rounded p-1 h-6 mt-1 cursor-pointer">
                                                    <i className="pi pi-minus text-white"></i>
                                                </div>
                                                <InputText value={tarif} onChange={(e) => setTarif(e.target.value)} className="w-36 bg-transparent text-white h-8 border-white font-poppins" />
                                                <div className="bg-purpleCustom shadow rounded p-1 h-6 mt-1 cursor-pointer">
                                                    <i className="pi pi-plus text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <Button label="Soumettre" className="bg-purpleCustom mt-20 text-white font-poppins text-sm border border-none outline outline-none flex justify-center items-center mx-auto w-[65%] py-3" />
                    </form >

                </main >
            </motion.div >
        </div >
    )
}

export default AddEvent