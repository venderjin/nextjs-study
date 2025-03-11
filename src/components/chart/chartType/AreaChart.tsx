"use client"
import dynamic from "next/dynamic"

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

interface ChartSeries {
    name: string
    data: number[]
}

export default function AreaChart() {
    const chartSeries: ChartSeries[] = [
        {
            name: "Series A",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: "Series B",
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ]

    return (
        <ApexChart
            type="area"
            series={chartSeries}
            width="100%"
            height="100%"
            options={{
                xaxis: {
                    type: "datetime",
                    categories: [
                        "2018-09-19T00:00:00.000Z",
                        "2018-09-19T01:30:00.000Z",
                        "2018-09-19T02:30:00.000Z",
                        "2018-09-19T03:30:00.000Z",
                        "2018-09-19T04:30:00.000Z",
                        "2018-09-19T05:30:00.000Z",
                        "2018-09-19T06:30:00.000Z",
                    ],
                },
                dataLabels: {
                    enabled: false,
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yy HH:mm",
                    },
                },
                colors: ["#030677", "#36B4AD"],
                stroke: {
                    curve: "smooth",
                },
            }}
        />
    )
}
