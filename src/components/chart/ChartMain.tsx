import ChartHeader from "@/components/chart/ChartHeader"
import ChartRenderer from "@/components/chart/ChartRenderer"

interface ChartMainProps {
    isMenuOpened: boolean
    chartType: string
}

export default function ChartMain({ isMenuOpened, chartType }: ChartMainProps) {
    return (
        <div
            className={`flex h-full flex-col transition-all duration-500 ${
                isMenuOpened ? "w-[calc(100%-272px)]" : "w-[calc(100%-72px)]"
            } `}
        >
            <ChartHeader />
            <ChartRenderer chartType={chartType} />
        </div>
    )
}
