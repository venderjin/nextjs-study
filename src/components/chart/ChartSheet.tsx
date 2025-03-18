import Link from "next/link"

import { ChartListType } from "@/type/ChartListType"
import { ChartList } from "@/lib/ChartList"

import { SquareChevronLeft } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ChartSheet({ chartType }: { chartType: string }) {
    return (
        <Sheet>
            <SheetTrigger>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="hover:bg-muted rounded-lg p-2">
                                <SquareChevronLeft className="stroke-accent-foreground" />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p> Chart List</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </SheetTrigger>
            <SheetContent side="right" className="gap-0">
                <SheetHeader className="bg-background flex h-[80px] w-full justify-center pl-5 drop-shadow-md">
                    <SheetTitle className="text-foreground text-lg font-medium md:text-2xl">
                        Chart List
                    </SheetTitle>
                </SheetHeader>
                <div className="bg-background h-[calc(100%-80px)] w-full flex-col items-center justify-center space-y-3 overflow-y-auto p-3 md:px-5">
                    {ChartList.map((chart: ChartListType) => (
                        <SheetClose
                            asChild
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
                        </SheetClose>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}
