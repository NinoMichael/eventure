import { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'

const EventStat = () => {
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})

    const getTailwindColor = (className) => {
        const element = document.createElement('div')
        element.className = className
        document.body.appendChild(element)
        const color = getComputedStyle(element).backgroundColor
        document.body.removeChild(element)
        return color
    }

    const purpleBackground = getTailwindColor('bg-purpleCustom')
    const purpleBorder = getTailwindColor('border-purpleCustom')

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement)
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
        const data = {
            labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
            datasets: [
                {
                    label: 'Concert Reko',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: '55 ans avec Mahaleo',
                    backgroundColor: purpleBackground,
                    borderColor: purpleBorder,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: '#FFFFFF',
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: '#FFFFFF',
                        font: {
                            weight: 500,
                        },
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
            },
        }
        setChartData(data)
        setChartOptions(options)
    }, [])

    return (
        <div className="bg-blackCustom rounded p-4">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}

export default EventStat
