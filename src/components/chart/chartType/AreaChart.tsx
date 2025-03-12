import BaseChart from "./BaseChart"

export default function AreaChart() {
    const areaChartSeries:
        | ApexAxisChartSeries
        | ApexNonAxisChartSeries
        | undefined = [
        {
            name: "Series A",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: "Series B",
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ]

    const areaChartOptions: ApexCharts.ApexOptions = {
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
    }

    return (
        <BaseChart
            type="area"
            series={areaChartSeries}
            options={areaChartOptions}
        />
    )
}
