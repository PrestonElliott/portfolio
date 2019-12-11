import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {

    return (
        <>
        <div className="jumbotron">
            <Link to="about" className="btn btn-primary btn-lg">
                About
            </Link>
        </div>

        <div className="jumbotron">
            <Link to="projects" className="btn btn-primary btn-lg">
                Projects
            </Link>
        </div>
        </>
    )

}