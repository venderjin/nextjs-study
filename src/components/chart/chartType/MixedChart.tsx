import { useState, useEffect } from "react"

import BaseChart from "./BaseChart"

export default function MixedChart() {
    const [chartWidth, setChartWidth] = useState(800) // 초기 차트 너비
    const [chartHeight, setChartHeight] = useState(400) // 초기 차트 높이

    // 창 크기가 변경될 때 차트 크기 업데이트
    useEffect(() => {
        const handleResize = () => {
            setChartWidth(window.innerWidth * 0.8) // 창 너비의 80%를 차트 너비로 설정
            setChartHeight(window.innerHeight * 0.5) // 창 높이의 50%를 차트 높이로 설정
        }

        window.addEventListener("resize", handleResize)
        handleResize() // 초기 실행

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const rangeBarChartSeries:
        | ApexAxisChartSeries
        | ApexNonAxisChartSeries
        | undefined = [
        {
            name: "TEAM A",
            type: "column",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
            hidden: false,
        },
        {
            name: "TEAM B",
            type: "area",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
            hidden: false,
        },
        {
            name: "TEAM C",
            type: "line",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
            hidden: false,
        },
    ]

    const weatherPoints = rangeBarChartSeries.flatMap((series) =>
        series.data.map((_, dataIndex) => ({
            marker: {
                size: 0, // ✅ 기본 마커 숨기기
            },
            image: {
                path: "/images/weather/sunny.png", // ✅ 이미지 경로
                offsetX: (chartWidth / series.data.length) * dataIndex, // ✅ 반응형 X 위치 조정
                offsetY: chartHeight * 0.95, // ✅ 반응형 Y 위치 조정 (차트 높이의 90%)
            },
        })),
    )
    const rangeBarChartOptions: ApexCharts.ApexOptions = {
        annotations: {
            points: weatherPoints,
        },
        chart: {
            toolbar: {
                show: false, // 툴바 표시
            },
            zoom: {
                enabled: false, // 줌 기능 여부
            },
        },
        colors: ["#030677", "#36B4AD", "#EE964B"],
        stroke: {
            width: [0, 0, 5],
            curve: "smooth", // Array로 각각 적용 가능 ["smooth", "smooth", "stepline"],
        },
        plotOptions: {
            bar: {
                columnWidth: "50%",
            },
        },
        fill: {
            opacity: [0.7, 0.5, 1],
            gradient: {
                inverseColors: false, //그라데이션의 시작 색상과 끝 색상을 반전
                shade: "light",
                type: "vertical",
                opacityFrom: 0.85, //색의 불투명도를 시작 계열마다 다른 불투명도를 원한다면 숫자 배열을 전달
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        labels: [
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
        ],
        markers: {
            size: 0, // 마커 크기 설정 bar 에서는 안나옴
            strokeColors: "#ffffff",
            strokeWidth: 2,
            shape: "circle", // 마커 모양 "circle", "square", "line", "plus", "cross", "star", "sparkle", "diamond", "triangle"
            hover: {
                size: 5,
            },
        },
        xaxis: {
            type: "category", // x축 라벨 타입 : "datetime", "numeric", "category"
            labels: {
                offsetY: 6, // x축 라벨 y축 오프셋
            },
            tooltip: {
                enabled: false, // x축 툴팁 활성화
            },
        },
        yaxis: {
            title: {
                text: "Points",
                rotate: -90, // y축 타이틀 회전
            },
        },
        tooltip: {
            shared: true, // 툴팁 공유
            x: {
                show: false,
            },
            y: [
                {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " KW"
                        }
                        return y
                    },

                    title: {
                        formatter: function (seriesName) {
                            return seriesName + " : "
                        },
                    },
                },
                {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(1) + " Mw"
                        }
                        return y
                    },
                    title: {
                        formatter: function (seriesName) {
                            return seriesName + " : "
                        },
                    },
                },
                {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " Kw"
                        }
                        return y
                    },
                    title: {
                        formatter: function (seriesName) {
                            return seriesName + " : "
                        },
                    },
                },
            ],
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            position: "top",
            horizontalAlign: "center",
            onItemHover: {
                highlightDataSeries: false, // 마우스 호버시 해당 데이터 강조
            },
            onItemClick: {
                toggleDataSeries: true, // 클릭시 해당 데이터 숨김
            },
        },
    }

    return (
        <BaseChart
            type="line" // 적용가능한 차트타입 : line, area, bar, scatter, bubble, heatmap, radar, rangeBar, rangeArea, treemap
            series={rangeBarChartSeries}
            options={rangeBarChartOptions}
        />
    )
}
