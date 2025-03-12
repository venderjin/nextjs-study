import BaseChart from "./BaseChart"

export default function RangeBarChart() {
    const rangeBarChartSeries:
        | ApexAxisChartSeries
        | ApexNonAxisChartSeries
        | undefined = [
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

    const rangeBarChartOptions: ApexCharts.ApexOptions = {
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
    }

    return (
        <BaseChart
            type="rangeBar"
            series={rangeBarChartSeries}
            options={rangeBarChartOptions}
        />
    )
}
