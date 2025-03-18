"use client"

import { useSearchParams } from "next/navigation"

import ChartRenderer from "@/components/chart/ChartRenderer"
import ChartHeader from "@/components/chart/ChartHeader"

export default function ChartPage() {
    const chartType = useSearchParams().get("type") || "line-chart" // 기본값 설정

    return (
        <div className="bg-background flex h-dvh w-dvw flex-col">
            <ChartHeader chartType={chartType} />
            <ChartRenderer chartType={chartType} />
        </div>
    )
}
