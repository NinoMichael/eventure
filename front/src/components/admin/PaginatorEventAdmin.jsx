import { useState } from "react"
import { Paginator } from 'primereact/paginator'

import '../../styles/user/style.css'

const PaginatorEventAdmin = () => {
    const [first, setFirst] = useState(0)
    const [rows, setRows] = useState(10)

    const onPageChange = (event) => {
        setFirst(event.first)
        setRows(event.rows)
    }

    return (
        <div>
            <Paginator first={first} rows={rows} totalRecords={120} onPageChange={onPageChange} className="font-poppins text-white text-sm mt-7 bg-transparent" />
        </div>
    )
}

export default PaginatorEventAdmin