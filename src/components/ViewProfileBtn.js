import React from "react"

export default function ViewProfileBtn(props){
    return(
        <a id='viewProfileBtn' href="/profile" onClick={props.handlePageChange}>View Profile</a>
    )
}
