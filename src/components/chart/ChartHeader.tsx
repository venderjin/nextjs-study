import ChartSheet from "./ChartSheet"

export default function ChartHeader({ chartType }: { chartType: string }) {
    return (
        <div className="bg-background flex h-[80px] w-full items-center justify-between px-6 drop-shadow-sm">
            <h1 className="text-foreground text-lg font-medium md:text-2xl">
                Apex Chart Test Page
            </h1>
            <ChartSheet chartType={chartType} />
        </div>
    )
}
