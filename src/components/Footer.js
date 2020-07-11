import React from "react"

export default function Footer(props) {
    console.log("props", props)
    return (
        <footer className="footer mt-auto py-3">
            <span className="text-muted">&copy;{props.profileText.name}</span>
        </footer>
    )
}