import React, { Component } from "react";



export default class Projects extends Component {
    render() {
        let profileText = this.props.profileText;
        return (
            <div>
                <h2 id="projects">Projects</h2>
                <div className="row">
                    {profileText.projects.map((item, i) => {
                        console.log(item.image)
                        return (
                            <div className="col-md-6 card" key={i}>
                                <div className="cardContainer">
                                    <img src={item.image} className="card-img-top" alt={item.name} />
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                        <p className="card-text">
                                            {item.description}<br/>
                                            <a href={item.repository}>Github Repository</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}