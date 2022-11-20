import React from "react"
import "./CardTitle.css"

export const CardTitle = ({title}: {title: string}) => {
    return <div className={"CardTitle"}>
        <h2>{title}</h2>
    </div>
}
