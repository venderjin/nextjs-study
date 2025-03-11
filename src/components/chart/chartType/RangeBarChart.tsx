"use client"
import dynamic from "next/dynamic"

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

interface ChartSeries {
    name: string
    data: { x: string; y: number[] }[]
}

export default function RangeBarChart() {
    const chartSeries: ChartSeries[] = [
        {
            name: "Dumbbell Chart",
            data: [
                {
                    x: "2008",
                    y: [2800, 4500],
                },
                {
                    x: "2009",
                    y: [3200, 4100],
                },
                {
                    x: "2010",
                    y: [2950, 7800],
                },
                {
                    x: "2011",
                    y: [3000, 4600],
                },
                {
                    x: "2012",
                    y: [3500, 4100],
                },
                {
                    x: "2013",
                    y: [4500, 6500],
                },
                {
                    x: "2014",
                    y: [4100, 5600],
                },
            ],
        },
    ]

    return (
        <ApexChart
            type="rangeBar" //공식문서에는 bar로 되어있지만, rangeBar로 해야 정상적으로 작동함
            series={chartSeries}
            width="100%"
            height="100%"
            options={{
                colors: ["#030677", "#36B4AD"],
                plotOptions: {
                    bar: {
                        isDumbbell: true,
                        columnWidth: 3,
                        dumbbellColors: [["#030677", "#36B4AD"]],
                    },
                },
                legend: {
                    show: true,
                    showForSingleSeries: false,
                    position: "top",
                    horizontalAlign: "left",
                    customLegendItems: ["Product A", "Product B"],
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        type: "vertical",
                        gradientToColors: ["#36B4AD"],
                        inverseColors: true,
                        stops: [0, 100],
                    },
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: true,
                        },
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                xaxis: {
                    tickPlacement: "on",
                },
            }}
        />
    )
}
