import React from "react"

export default function Trip(props){
    return(
        <div className="trip">
            <img src={require(`../assets/${props.vie}.png`)} alt="trip_picture" id="trip_pic"/>
            <div className="trip_info">
                <div>
                    <img src={require("../assets/location.png")} alt="pos_icon" id="pos_icon"/>
                    <span id="trip_text_pos">{props.country}</span>
                    <a href="www.google.com" >view on google map</a>
                </div>
                <span id="trip_place">{props.place}</span>
                <span id="trip_date"> {props.date}</span>
                <span id="description">
                {props.descriptions}</span>

            </div>

        </div>
    )
}
//