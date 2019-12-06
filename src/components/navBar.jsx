import React, { useState } from "react"
import { } from "react-bootstrap"

export default function NavBar() {
    const [navBarStatus, updateNavStatus] = useState(false)

    return (
        <Header
            navBarStatus={navBarStatus}
            onToggleMenu={() => updateNavStatus(!navBarStatus)}
        />
    )
}