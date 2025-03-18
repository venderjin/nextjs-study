import BaseChart from "./BaseChart"

export default function RangeAreaChart() {
    const areaChartSeries:
        | ApexAxisChartSeries
        | ApexNonAxisChartSeries
        | undefined = [
        {
            type: "rangeArea",
            name: "Team B Range",

            data: [
                {
                    x: "6",
                    y: [1100, 1900],
                },
                {
                    x: "7",
                    y: [1200, 1800],
                },
                {
                    x: "8",
                    y: [900, 2900],
                },
                {
                    x: "9",
                    y: [1400, 2700],
                },
                {
                    x: "10",
                    y: [2600, 3900],
                },
                {
                    x: "11",
                    y: [500, 1700],
                },
                {
                    x: "12",
                    y: [1900, 2300],
                },
                {
                    x: "13",
                    y: [1000, 1500],
                },
            ],
        },

        {
            type: "rangeArea",
            name: "Team A Range",
            data: [
                {
                    x: "6",
                    y: [3100, 3400],
                },
                {
                    x: "7",
                    y: [4200, 5200],
                },
                {
                    x: "8",
                    y: [3900, 4900],
                },
                {
                    x: "9",
                    y: [3400, 3900],
                },
                {
                    x: "10",
                    y: [5100, 5900],
                },
                {
                    x: "11",
                    y: [5400, 6700],
                },
                {
                    x: "12",
                    y: [4300, 4600],
                },
                {
                    x: "13",
                    y: [2100, 2900],
                },
            ],
        },

        {
            type: "line",
            name: "Team B Median",
            data: [
                {
                    x: "6",
                    y: 1500,
                },
                {
                    x: "7",
                    y: 1700,
                },
                {
                    x: "8",
                    y: 1900,
                },
                {
                    x: "9",
                    y: 2200,
                },
                {
                    x: "10",
                    y: 3000,
                },
                {
                    x: "11",
                    y: 1000,
                },
                {
                    x: "12",
                    y: 2100,
                },
                {
                    x: "13",
                    y: 1200,
                },
                {
                    x: "14",
                    y: 1800,
                },
                {
                    x: "15",
                    y: 2000,
                },
            ],
        },
        {
            type: "line",
            name: "Team A Median",
            data: [
                {
                    x: "6",
                    y: 3300,
                },
                {
                    x: "7",
                    y: 4900,
                },
                {
                    x: "8",
                    y: 4300,
                },
                {
                    x: "9",
                    y: 3700,
                },
                {
                    x: "10",
                    y: 5500,
                },
                {
                    x: "11",
                    y: 5900,
                },
                {
                    x: "12",
                    y: 4500,
                },
                {
                    x: "13",
                    y: 2400,
                },
                {
                    x: "14",
                    y: 2100,
                },
                {
                    x: "15",
                    y: 1500,
                },
            ],
        },
    ]

    const areaChartOptions: ApexCharts.ApexOptions = {
        annotations: {
            points: [
                // {
                //     image: {
                //         path: "/images/weather/sunny.png",
                //         offsetX: 0,
                //         offsetY: 400,
                //     },
                // },
                // {
                //     image: {
                //         path: "/images/weather/sunny.png",
                //         offsetX: 100,
                //         offsetY: 400,
                //     },
                // },
                // {
                //     image: {
                //         path: "/images/weather/sunny.png",
                //         offsetX: 200,
                //         offsetY: 400,
                //     },
                // },
            ],
        },
        chart: {
            animations: {
                speed: 500,
            },
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        colors: ["#030677", "#36B4AD"],
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: [0.24, 0.24, 1, 1],
        },
        forecastDataPoints: {
            count: 2, // 예측 데이터 포인트 수
            dashArray: 3, // 예측 데이터 포인트 선 스타일
            strokeWidth: 3, // 예측 데이터 포인트 선 두께
        },
        stroke: {
            curve: "straight",
            width: [0, 0, 3, 3],
        },
        legend: {
            show: true,
            customLegendItems: ["Team A", "Team B"],
            inverseOrder: true, // 역순으로 레전드 아이템 표시
            position: "top",
        },
        title: {
            text: "Range Area with Forecast Line (Combo)",
        },
        xaxis: {
            type: "category",
            tickAmount: 9,
            tickPlacement: "between",
            labels: {
                offsetY: 5,
                formatter: function (value) {
                    return value + ":00"
                },
            },
            tooltip: {
                enabled: false,
            },
        },
    }

    return (
        <BaseChart
            type="rangeArea"
            series={areaChartSeries}
            options={areaChartOptions}
        />
    )
}
