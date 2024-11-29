const CardStat = () => {
    return (
        <section className="flex flex-row space-x-6">
            <div className="flex flex-row justify-start bg-blackCustom rounded h-16 pe-4 ps-2 space-x-3 w-96">
                <i className="pi pi-user text-purpleCustom ms-2 mt-6"></i>
                <div className="-mt-3">
                    <h5 className="font-normal text-slate-300">Evénements à venir</h5>
                    <p className="font-semibold text-white text-lg -mt-6">3</p>
                </div>
            </div>

            <div className="flex flex-row justify-start bg-blackCustom rounded h-16 pe-4 ps-2 space-x-3 w-96">
                <i className="pi pi-user text-purpleCustom ms-2 mt-6"></i>
                <div className="-mt-3">
                    <h5 className="font-normal text-slate-300">Total événements</h5>
                    <p className="font-semibold text-white text-lg -mt-6">3</p>
                </div>
            </div>

            <div className="flex flex-row justify-start bg-blackCustom rounded h-16 pe-4 ps-2 space-x-3 w-96">
                <i className="pi pi-user text-purpleCustom ms-2 mt-6"></i>
                <div className="-mt-3">
                    <h5 className="font-normal text-slate-300">Total participants</h5>
                    <p className="font-semibold text-white text-lg -mt-6">3</p>
                </div>
            </div>

        </section>
    )
}

export default CardStat