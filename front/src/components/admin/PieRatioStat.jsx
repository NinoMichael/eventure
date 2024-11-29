import { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'

const PieRatioStat = () => {
    const [pieData, setPieData] = useState({})
    const [pieOptions, setPieOptions] = useState({})


    const getTailwindColor = (className) => {
        const element = document.createElement('div')
        element.className = className
        document.body.appendChild(element)
        const color = getComputedStyle(element).backgroundColor
        document.body.removeChild(element)
        return color
    }

    const purpleBackground = getTailwindColor('bg-purpleCustom')

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement)
        const data = {
            labels: ['Participants confirmés', 'Inscriptions potentielles'],
            datasets: [
                {
                    data: [88, 12],
                    backgroundColor: [
                        purpleBackground,
                        documentStyle.getPropertyValue('--blue-500')
                    ]
                }
            ]
        }

        const options = {
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 20,
                        boxHeight: 10,
                        maxWidth: 500, // Empêche les retours à la ligne inutiles
                        color: "#FFFFFF",
                        font: {

                            weight: '500',
                        },
                    },
                },
            },
            layout: {
                padding: {
                    top: 20,
                    bottom: 20,
                },
            },
        };

        setPieData(data)
        setPieOptions(options)
    }, [])

    return (
        <div className="rounded p-4">
            <Chart type="pie" data={pieData} options={pieOptions} className="h-72 w-72 -mt-7 flex justify-center items-center mx-auto" />
        </div>
    )
}

export default PieRatioStat