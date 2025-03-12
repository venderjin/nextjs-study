import BaseChart from "./BaseChart"

export default function ColumnChart() {
    const columnChartSeries:
        | ApexAxisChartSeries
        | ApexNonAxisChartSeries
        | undefined = [
        {
            name: "Actual",
            data: [
                {
                    x: "2011",
                    y: 1292,
                    goals: [
                        {
                            name: "Expected",
                            value: 1400,
                            strokeHeight: 5,
                            strokeColor: "#030677",
                        },
                    ],
                },
                {
                    x: "2012",
                    y: 4432,
                    goals: [
                        {
                            name: "Expected",
                            value: 5400,
                            strokeHeight: 5,
                            strokeColor: "#030677",
                        },
                    ],
                },
                {
                    x: "2013",
                    y: 5423,
                    goals: [
                        {
                            name: "Expected",
                            value: 5200,
                            strokeHeight: 5,
                            strokeColor: "#030677",
                        },
                    ],
                },
                {
                    x: "2014",
                    y: 6653,
                    goals: [
                        {
                            name: "Expected",
                            value: 6500,
                            strokeHeight: 5,
                            strokeColor: "#030677",
                        },
                    ],
                },
                {
                    x: "2015",
                    y: 8133,
                    goals: [
                        {
                            name: "Expected",
                            value: 6600,
                            strokeHeight: 13,
                            strokeWidth: 0,
                            strokeLineCap: "round",
                            strokeColor: "#030677",
                        },
                    ],
                },
                {
                    x: "2016",
                    y: 7132,
                    goals: [
                        {
                            name: "Expected",
                            value: 7500,
                            strokeHeight: 5,
                            strokeColor: "#030677",
                        },
                    ],
                },
                {
                    x: "2017",
                    y: 7332,
                    goals: [
                        {
                            name: "Expected",
                            value: 8700,
                            strokeHeight: 5,
                            strokeColor: "#030677",
                        },
                    ],
                },
                {
                    x: "2018",
                    y: 6553,
                    goals: [
                        {
                            name: "Expected",
                            value: 7300,
                            strokeHeight: 2,
                            strokeDashArray: 2,
                            strokeColor: "#030677",
                        },
                    ],
                },
            ],
        },
    ]

    const columnChartOptions: ApexCharts.ApexOptions = {
        xaxis: {
            type: "category",
        },
        colors: ["#36B4AD", "#030677"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            floating: true,
            position: "top",
            customLegendItems: ["Actual", "Expected"],
            markers: {
                fillColors: ["#36B4AD", "#030677"],
            },
        },
        tooltip: {
            enabled: false,
        },
        states: {
            hover: {
                filter: {
                    type: "darken",
                },
            },
        },
    }

    return (
        <BaseChart
            type="bar"
            series={columnChartSeries}
            options={columnChartOptions}
        />
    )
}
