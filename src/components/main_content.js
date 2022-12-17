import React from "react"
import Trip from "./trip"
import data from  "./data"

export default function Main_content(){
    let dataT=data.map(data => {
        return <Trip {...data}/>
    }
    )
    return(
        <div className="main_content">
            {dataT}
        </div>
    )
}