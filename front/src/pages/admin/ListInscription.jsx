import { useState } from "react"
import { motion } from "framer-motion"
import VMenuAdmin from "../../components/admin/VMenuAdmin"
import ToolBar from "../../components/admin/ToolBar"
import { Button } from "primereact/button"
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const ListInscription = () => {
    const [collapsed, setCollapsed] = useState(false)

    const participations = [
        {
            id: 1,
            participant: "Mirindra Harilala",
            nbreReservant: "2",
            date: "14-12-2024"
        },
        {
            id: 2,
            participant: "Mirindra Harilala",
            nbreReservant: "2",
            date: "14-12-2024"
        },
        {
            id: 3,
            participant: "Mirindra Harilala",
            nbreReservant: "2",
            date: "14-12-2024"
        },
        {
            id: 4,
            participant: "Mirindra Harilala",
            nbreReservant: "2",
            date: "14-12-2024"
        },
        {
            id: 5,
            participant: "Mirindra Harilala",
            nbreReservant: "2",
            date: "14-12-2024"
        },
    ]

    return (
        <div className="bg-blackPure h-[100vh]">
            <VMenuAdmin collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBar collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-5 pb-8 bg-blackPure`}>
                    <div className="flex flex-row justify-between">
                        <div className="-mt-1">
                            <h2 className="font-poppins text-white text-xl">Liste des inscriptions</h2>
                            <p className="text-white font-poppins text-sm -mt-2">Consultez la liste des participations ici</p>
                        </div>

                        <Button label="Envoyer un rappel" className="font-poppins text-white text-sm border border-none outline outline-none bg-purpleCustom py-1 h-10 mt-4 px-4" />
                    </div>

                    <div className="mt-8">
                        <DataTable className="custom-datatable font-poppins text-sm" value={participations} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                            <Column field="id" header="ID" style={{ width: '25%' }}></Column>
                            <Column field="participant" header="Participant" style={{ width: '25%' }}></Column>
                            <Column field="nbreReservant" header="Réservants" style={{ width: '25%' }}></Column>
                            <Column field="date" header="Date" style={{ width: '25%' }}></Column>
                        </DataTable>
                    </div>
                </main>
            </motion.div>
        </div>
    )
}

export default ListInscription  