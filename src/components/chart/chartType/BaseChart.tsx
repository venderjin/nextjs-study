import dynamic from "next/dynamic"

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

interface BaseChartProps {
    type?:
        | "line"
        | "area"
        | "bar"
        | "pie"
        | "donut"
        | "radialBar"
        | "scatter"
        | "bubble"
        | "heatmap"
        | "candlestick"
        | "boxPlot"
        | "radar"
        | "polarArea"
        | "rangeBar"
        | "rangeArea"
        | "treemap"
    series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined
    options: ApexCharts.ApexOptions
}

export default function BaseChart({ type, series, options }: BaseChartProps) {
    return (
        <ApexChart
            type={type}
            series={series}
            width="100%"
            height="100%"
            options={options}
        />
    )
}
