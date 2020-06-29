import React, { Component } from "react"

export default class AboutMe extends Component{
    render(){
        let profileText = this.props.profileText;
            return (
         <div class="card col-md-6">
                <div class="cardContainer">
                    <h2>Hello Everyone</h2>
                    <p class="portfolioparagraph">
                        {profileText.aboutMe}
                    </p>
                    <div class="row">
                        {profileText.repositories.map((item)=>{
                            return(
                                <div class="sub-col col-md-4">
                            <p><a href={item.href}>{item.name}</a></p>
                        </div>
                            )
                        })}
                    </div>
                </div>
            </div> 
)
    }

}