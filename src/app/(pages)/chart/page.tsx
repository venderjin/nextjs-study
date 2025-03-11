"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

import ChartMenu from "@/components/chart/ChartMenu"
import ChartMain from "@/components/chart/ChartMain"

export default function ChartPage() {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(true)
    const chartType = useSearchParams().get("type") || "line-chart" // 기본값 설정

    const handleMenuToggle = () => {
        setIsMenuOpened(!isMenuOpened)
    }

    return (
        <div className="flex h-dvh w-dvw flex-row bg-white">
            <ChartMenu
                isMenuOpened={isMenuOpened}
                handleMenuToggle={handleMenuToggle}
                chartType={chartType}
            />
            <ChartMain isMenuOpened={isMenuOpened} chartType={chartType} />
        </div>
    )
}
