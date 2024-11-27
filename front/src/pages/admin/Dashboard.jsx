import { useState } from "react"
import VMenuAdmin from "../../components/admin/VMenuAdmin"
import { motion } from "framer-motion"
import ToolBar from "../../components/admin/ToolBar"

const DashboardAdmin = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="bg-blackPure h-[100vh]">
            <VMenuAdmin collapsed={collapsed} setCollapsed={setCollapsed} />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="-mt-4 -z-10">
                <ToolBar collapsed={collapsed} setCollapsed={setCollapsed} />

                <main className={` ${collapsed ? 'ms-24' : 'ms-64'} me-12 mt-7 bg-blackPure`}>

                </main>
            </motion.div>
        </div>
    )
}

export default DashboardAdmin