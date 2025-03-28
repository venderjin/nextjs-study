import BaseChartProps from "./BaseChart"

export default function BarChart() {
    const barChartSeries:
        | ApexAxisChartSeries
        | ApexNonAxisChartSeries
        | undefined = [
        {
            name: "Marine Sprite",
            data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
            name: "Striking Calf",
            data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
            name: "Tank Picture",
            data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
            name: "Bucket Slope",
            data: [9, 7, 5, 8, 6, 9, 4],
        },
        {
            name: "Reborn Kid",
            data: [25, 12, 19, 32, 25, 24, 10],
        },
    ]

    const barChartOptions: ApexCharts.ApexOptions = {
        colors: ["#030677", "#1F7A8C", "#36B4AD", "#F4D35E", "#EE964B"],
        chart: {
            type: "bar",
            height: 350,
            stacked: true,
            // stackType: "100%", // 100% stacked bar 사용할때 추가
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ["#fff"],
        },
        title: {
            text: "100% Stacked Bar",
        },
        xaxis: {
            categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K"
                },
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: "top",
            horizontalAlign: "left",
            offsetX: 40,
        },
    }

    return (
        <BaseChartProps
            type="bar"
            series={barChartSeries}
            options={barChartOptions}
        />
    )
}
