import React from "react"

export default function ViewProfileBtn(props){
    function profilePage(){
        window.location.replace("/React_Profile/profile")
    }
    return(
        <a id='viewProfileBtn' onClick={profilePage}>View Profile</a>
    )
}
