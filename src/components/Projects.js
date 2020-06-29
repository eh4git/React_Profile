import React, { Component } from "react";

export default class Projects extends Component {
    render() {
        let profileText = this.props.profileText;
        return (
            <div>
            {profileText.projects.map((item) => {
                    return (
                        <div class="col-md-6 card">
                            <div class="cardContainer">
                                <img src={item.image} class="card-img-top" alt={item.name} />
                                <div class="card-body">
                                    <h4 class="card-title">{item.name}</h4>
                                    <p class="card-text">
                                        {item.description}
                                        <a href={item.repository}>Github Repository</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> 
         )
     }  
}