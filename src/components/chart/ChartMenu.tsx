import { SquareChevronLeft, SquareChevronRight } from "lucide-react"
import { ChartListType } from "@/type/ChartListType"
import { ChartList } from "@/lib/ChartList"
import Link from "next/link"

interface ChartMenuProps {
    isMenuOpened: boolean
    handleMenuToggle: () => void
    chartType: string
}

export default function ChartMenu({
    isMenuOpened,
    handleMenuToggle,
    chartType,
}: ChartMenuProps) {
    return (
        <div
            className={`relative flex h-full transition-all duration-500 ${
                isMenuOpened ? "w-[272px]" : "w-[72px]"
            } bg-red-400`}
        >
            <div className="bg-sidebar h-full w-full flex-col overflow-hidden">
                <div className="border-sidebar-border flex h-[80px] w-full flex-row items-center justify-between border-b px-3">
                    <h1
                        className={`text-foreground pl-3 text-xl font-medium transition-all duration-500 ${
                            isMenuOpened
                                ? "max-w-full opacity-100 delay-200"
                                : "hidden"
                        } whitespace-nowrap`}
                    >
                        Chart list
                    </h1>
                    <div
                        className="hover:bg-sidebar-border flex cursor-pointer items-center justify-center rounded-lg p-3"
                        onClick={handleMenuToggle}
                    >
                        {isMenuOpened ? (
                            <SquareChevronLeft />
                        ) : (
                            <SquareChevronRight />
                        )}
                    </div>
                </div>
                <div
                    className={`h-[calc(100%-100px)] space-y-2 overflow-hidden p-3 transition-opacity duration-300 ${
                        isMenuOpened ? "opacity-100 delay-300" : "opacity-0"
                    }`}
                >
                    {ChartList.map((chart: ChartListType) => (
                        <div
                            key={chart.id}
                            className={`rounded-lg px-3 ${
                                chartType === chart.type
                                    ? "bg-[#E3E3E3]"
                                    : "hover:bg-[#E3E3E3]"
                            }`}
                        >
                            <Link
                                href={`/chart?type=${chart.type}`}
                                className={`block py-2 font-medium ${
                                    chartType === chart.type
                                        ? "text-foreground"
                                        : "hover:text-foreground text-muted-foreground"
                                }`}
                            >
                                {chart.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
