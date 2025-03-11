"use client"
import dynamic from "next/dynamic"

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

interface ChartSeries {
    name: string
    data: number[]
}

export default function LineChart() {
    const chartSeries: ChartSeries[] = [
        {
            name: "Series A",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        },
        {
            name: "Series B",
            data: [20, 29, 37, 36, 44, 45, 50, 58],
        },
    ]

    return (
        <ApexChart
            type="line"
            series={chartSeries}
            width="100%"
            height="100%"
            options={{
                xaxis: {
                    categories: [
                        2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
                    ],
                },
                yaxis: [
                    {
                        axisTicks: { show: true }, // 왼쪽 Y축의 눈금 표시
                        axisBorder: { show: true, color: "#030677" }, // 왼쪽 Y축의 테두리 색상
                        labels: { style: { colors: "#030677" } }, // 왼쪽 Y축 글자 색상
                        title: {
                            text: "Series A",
                            style: { color: "#030677" },
                        }, // 왼쪽 Y축 제목
                    },
                    {
                        opposite: true, // ✅ 오른쪽에 추가 Y축 생성
                        axisTicks: { show: true }, // 오른쪽 Y축의 눈금 표시
                        axisBorder: { show: true, color: "#36B4AD" }, // 오른쪽 Y축의 테두리 색상
                        labels: { style: { colors: "#36B4AD" } }, // 오른쪽 Y축 글자 색상
                        title: {
                            text: "Series B",
                            style: { color: "#36B4AD" },
                        }, // 오른쪽 Y축 제목
                    },
                ],
                colors: ["#030677", "#36B4AD"],
                stroke: {
                    curve: "smooth",
                },
            }}
        />
    )
}
