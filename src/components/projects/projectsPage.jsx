import React, { useState } from 'react'

export default function ProjectsPage() {
    const [projectTitle, setProjectTitle] = useState("")

    const handleChange = event => {
        setProjectTitle(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        alert(projectTitle)
    }

    return (
        <>
        <h2>Projects</h2>
        <h2>Add Project</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                value={projectTitle}
            />

            <input type="submit" value="Save"/>
        </form>
        </>
    )
}