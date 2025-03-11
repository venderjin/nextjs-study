import { ChartList } from "@/lib/ChartList"
import { JSX } from "react"
import { ChartListType } from "@/type/ChartListType"

import LineChart from "@/components/chart/chartType/LineChart"
import AreaChart from "@/components/chart/chartType/AreaChart"
import RangeBarChart from "@/components/chart/chartType/RangeBarChart"
import ColumnChart from "@/components/chart/chartType/ColumnChart"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

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
        "range-bar-chart": <RangeBarChart />,
    }

    return (
        <div className="flex h-[calc(100%-80px)] w-full flex-col items-center justify-center px-40 py-20">
            <Card className="flex h-full w-full flex-col items-center justify-center">
                <CardHeader className="w-full">
                    <CardTitle className="text-2xl">
                        {renderingChart?.name}
                    </CardTitle>
                    <CardDescription className="text-lg">
                        <a href={renderingChart?.docs} target="_blank">
                            {renderingChart?.docs}
                        </a>
                    </CardDescription>
                </CardHeader>
                <Separator />
                <CardContent className="h-full w-full max-w-[1200px]">
                    {renderingChart?.type &&
                        chartComponents[renderingChart.type]}
                </CardContent>
            </Card>
        </div>
    )
}
