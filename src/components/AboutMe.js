import React, { Component } from "react"

export default class AboutMe extends Component {
    render() {
        let profileText = this.props.profileText;
        return (
            <div className="jumbotron jumbotron-fluid col-md-12">
                <h2 id="aboutMe">About Me</h2>
                <p className="portfolioparagraph">
                    {profileText.aboutMe}
                </p>
                <div className="row">
                    {profileText.repositories.map((item) => {
                        return (
                            <div className="sub-col col-md-4">
                                <p><a href={item.href}>{item.name}</a></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}