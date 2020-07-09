import React from "react"

export default function ViewProfileBtn(props){
    return(
        <a id='viewProfileBtn' href="/React_Profile/profile" onClick={props.handlePageChange}>View Profile</a>
    )
}
