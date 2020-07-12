import React from "react"

export default function ViewProfileBtn(props){
    return(
        <a id='viewProfileBtn' href="#nav" onClick={props.handlePageChange}>View Profile</a>
    )
}
