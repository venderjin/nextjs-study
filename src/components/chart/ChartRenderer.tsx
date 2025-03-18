import { ChartList } from "@/lib/ChartList"
import { JSX } from "react"
import { ChartListType } from "@/type/ChartListType"

import LineChart from "@/components/chart/chartType/LineChart"
import AreaChart from "@/components/chart/chartType/AreaChart"
import ColumnChart from "@/components/chart/chartType/ColumnChart"
import BarChart from "@/components/chart/chartType/BarChart"
import RangeBarChart from "@/components/chart/chartType/RangeBarChart"
import MixedChart from "@/components/chart/chartType/MixedChart"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import RangeAreaChart from "./chartType/RangeAreaChart"

interface ChartRendererProps {
    chartType: string
}

export default function ChartRenderer({ chartType }: ChartRendererProps) {
    const renderingChart = ChartList.find(
        (chart: ChartListType) => chart.type === chartType,
    )

    const chartComponents: Record<string, JSX.Element> = {
        "line-chart": <LineChart />,
        "area-chart": <AreaChart />,
        "column-chart": <ColumnChart />,
        "bar-chart": <BarChart />,
        "mixed-chart": <MixedChart />,
        "range-bar-chart": <RangeBarChart />,
        "range-area-chart": <RangeAreaChart />,
    }

    return (
        <div className="flex h-[calc(100%-80px)] w-full flex-col items-center overflow-y-auto pt-[5dvw] md:justify-center md:pt-0">
            <Card className="flex h-[140dvw] w-[90dvw] flex-col items-center justify-center md:h-[40dvw] md:w-[64dvw]">
                <CardHeader className="w-full">
                    <CardTitle className="text-lg md:text-2xl">
                        {renderingChart?.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium md:text-lg">
                        <a href={renderingChart?.docs} target="_blank">
                            {renderingChart?.docs}
                        </a>
                    </CardDescription>
                </CardHeader>
                <Separator />
                <CardContent className="size-full p-0 md:px-6">
                    {renderingChart?.type &&
                        chartComponents[renderingChart.type]}
                </CardContent>
            </Card>
        </div>
    )
}
