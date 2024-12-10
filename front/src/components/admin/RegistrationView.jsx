import { Avatar } from "primereact/avatar"
import rakoto from "../../assets/rakoto.jpeg"

const RegistrationView = () => {
    const recentRegistration = [
        {
            id: 1,
            nomUser: "Mirindra Harilala",
            event: "Concert avec Reko",
            date: "12:23",
            imgUser: rakoto,
        },
        {
            id: 2,
            nomUser: "Mirindra Harilala",
            event: "Concert avec Reko",
            date: "12:23",
            imgUser: rakoto,
        },
        {
            id: 3,
            nomUser: "Mirindra Harilala",
            event: "Concert avec Reko",
            date: "12:23",
            imgUser: rakoto,
        },
        {
            id: 4,
            nomUser: "Mirindra Harilala",
            event: "Concert avec Reko",
            date: "12:23",
            imgUser: rakoto,
        },
        {
            id: 5,
            nomUser: "Mirindra Harilala",
            event: "Concert avec Reko",
            date: "12:23",
            imgUser: rakoto,
        },
        {
            id: 6,
            nomUser: "Mirindra Harilala",
            event: "Concert avec Reko",
            date: "12:23",
            imgUser: rakoto,
        },
        {
            id: 7,
            nomUser: "Mirindra Harilala",
            event: "Concert avec Reko",
            date: "12:23",
            imgUser: rakoto,
        }
    ]

    return (
        <>
            {recentRegistration.map((recent) => (
                <div key={recent.id} className="flex flex-row justify-between mb-2">
                    <div className="flex flex-row justify-start space-x-4" >
                        <Avatar image={rakoto} shape="circle" className="mt-5" />
                        <div>
                            <p className="text-white font-semibold text-sm">Mirindra Harilala</p>
                            <p className="text-xs text-white -mt-3"><i className="pi pi-clipboard me-2 text-xs"></i>Concert avec Reko</p>
                        </div>
                    </div>

                    <div className="text-white mt-5">12:23</div>
                </div>
            ))}

        </>


    )
}

export default RegistrationView