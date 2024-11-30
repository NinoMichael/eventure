import { useState, useRef, useMemo } from "react"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import ToolBar from "../../components/admin/ToolBar"
import { motion } from "framer-motion"
import VMenu from "../../components/user/VMenu"
import { Avatar } from "primereact/avatar"
import { Divider } from "primereact/divider"
import ChatFormUser from "../../components/user/ChatFormUser"
import MessageBlockUser from "../../components/user/MessageBlockUser"

import reko from "../../assets/reko.png"

const WorkspaceUser = () => {
    const [messages, setMessages] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [inputSearchEvent, setInputSearchEvent] = useState("")
    const [collapsed, setCollapsed] = useState(false)
    const [hoveredMessageIndex, setHoveredMessageIndex] = useState(null)

    const msgOption = useRef(null)

    const dataEvents = useMemo(
        () => [
            {
                id: 1,
                event: "Concert avec Reko",
                nbreMembre: 100,
                imgEvent: reko,
            },
            {
                id: 2,
                event: "Concert avec Reko",
                nbreMembre: 100,
                imgEvent: reko,
            },
        ],
        []
    )

    const filteredEvents = useMemo(() => {
        return dataEvents.filter((event) =>
            event.event.toLowerCase().includes(inputSearchEvent.toLowerCase())
        )
    }, [dataEvents, inputSearchEvent])

    const handleSelectEvent = (dataEvent) => {
        setSelectedEvent(dataEvent)
    }

    const handleSubmitMessage = (message) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: message, isUser: true },
        ])
    }

    return (
        <div className="custom-bg-home h-[100vh] overflow-hidden">
            <VMenu collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="-mt-4 -z-10"
            >
                <ToolBar collapsed={collapsed} setCollapsed={setCollapsed} />

                <p className="ms-64 text-white">Consultez et interagissez avec les espaces de discussions dédiées aux événements que vous allez participer</p>

                <main
                    className={`${collapsed ? "ms-24" : "ms-64"
                        } me-12 mt-3 pb-8 grid grid-cols-[30%_70%] space-x-6`}
                >
                    <section className="bg-blackCustom shadow rounded py-4 overflow-y-auto h-[77vh]">
                        <div className="p-inputgroup flex-1 h-10 mt-4 custom-border-search rounded-3xl w-72 ms-4">
                            <InputText
                                placeholder="Rechercher un événement"
                                className="w-[25vw] custom-input-search-for-company bg-transparent indent-3 placeholder:text-white border-none font-poppins text-xs text-white"
                                value={inputSearchEvent}
                                onChange={(e) =>
                                    setInputSearchEvent(e.target.value)
                                }
                            />
                            <Button
                                title="Rechercher"
                                icon="pi pi-search"
                                className="text-white me-3 border-none bg-transparent p-inputgroup-addon outline-none"
                            />
                        </div>

                        <div className="mt-6">
                            {filteredEvents.map((dataEvent) => (
                                <div
                                    key={dataEvent.id}
                                    onClick={() =>
                                        handleSelectEvent(dataEvent)
                                    }
                                    className="flex flex-row justify-between cursor-pointer hover:bg-blackPure px-4 py-2 hover:rounded"
                                >
                                    <div className="flex flex-row space-x-4">
                                        <Avatar
                                            image={dataEvent.imgEvent}
                                            shape="square"
                                            size="large"
                                        />
                                        <div className="-mt-2">
                                            <h3 className="text-white text-sm">
                                                {dataEvent.event}
                                            </h3>
                                            <p className="text-white text-xs -mt-3">
                                                <i className="pi pi-user text-xs me-2"></i>
                                                {dataEvent.nbreMembre} membres
                                            </p>
                                        </div>
                                    </div>

                                    <i
                                        className="pi pi-ellipsis-v mt-3 text-white cursor-pointer"
                                        title="Option"
                                    ></i>
                                </div>
                            ))}
                        </div>
                    </section>

                    <motion.section
                        className="bg-blackCustom rounded"
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        key={selectedEvent?.id || "empty"}
                    >
                        {selectedEvent ? (
                            <section>
                                <div className="py-1 px-5 flex flex-row justify-between">
                                    <div className="flex flex-row space-x-3">
                                        <Avatar
                                            image={selectedEvent.imgEvent}
                                            shape="square"
                                            size="large"
                                            className="mt-2"
                                        />
                                        <div>
                                            <h3 className="text-white">
                                                {selectedEvent.event}
                                            </h3>
                                            <p className="-mt-4 text-white text-xs">
                                                {selectedEvent.nbreMembre}{" "}
                                                membres
                                            </p>
                                        </div>
                                    </div>

                                    <Button
                                        icon="pi pi-ellipsis-v"
                                        className="bg-transparent border-none outline-none"
                                        title="Option"
                                    />
                                </div>

                                <Divider className="mt-0" />

                                <div className="flex flex-col space-y-2 p-4 overflow-y-auto h-[60vh]">
                                    {messages.map((msg, index) => (
                                        <MessageBlockUser
                                            key={index}
                                            message={msg.text}
                                            isUser={msg.isUser}
                                            showAvatar={!msg.isUser}
                                            msgOption={msgOption}
                                            isHovered={
                                                hoveredMessageIndex === index
                                            }
                                            onMouseEnter={() =>
                                                setHoveredMessageIndex(index)
                                            }
                                            onMouseLeave={() =>
                                                setHoveredMessageIndex(null)
                                            }
                                        />
                                    ))}
                                </div>

                                <ChatFormUser onSubmitMessage={handleSubmitMessage} />
                            </section>
                        ) : (
                            <p className="flex justify-center font-semibold items-end mx-auto text-white text-opacity-60 mt-52">
                                Aucun espace de discussion sélectionné pour le
                                moment
                            </p>
                        )}
                    </motion.section>
                </main>
            </motion.div>
        </div>
    )
}

export default WorkspaceUser
