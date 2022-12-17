import React from "react"

export default function Navbar(){
    return(
        <div className="navbar">
            <img src={require("../assets/logo.png")} id="nav_img" alt="logo"></img>
            <span id="nav_title">Travel Journal</span>
        </div>
    )

}