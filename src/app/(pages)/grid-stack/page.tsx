// "use client"
// import { useState, useEffect } from "react"
// import GridLayout from "react-grid-layout"

export default function GridStackPage() {
    // const [layout] = useState([
    //     { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    //     { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    //     { i: "c", x: 4, y: 0, w: 1, h: 2 },
    // ])

    // useEffect(() => {
    //     {
    //         console.log("mounted")
    //     }
    // }, [layout])

    return (
        <>
            {/* <GridLayout
                className="gap-5 bg-yellow-100"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
            >
                <div key="a" className="flex bg-red-50">
                    a
                </div>
                <div key="b" className="flex bg-red-50">
                    b
                </div>
                <div key="c" className="flex bg-red-50">
                    c
                </div>
            </GridLayout> */}
            <div className="h-dvh w-dvw bg-[#f2f2f2]">grid-stack test</div>
        </>
    )
}
