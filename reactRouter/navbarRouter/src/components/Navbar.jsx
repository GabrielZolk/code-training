import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='nav'>
            <Link to="/" className='icon'>Zolk</Link>
            <ul>
                <CustomLink href="/about">Sobre</CustomLink>
                <CustomLink href="/profile">Perfil</CustomLink>
            </ul>
        </nav>

    )
}

function CustomLink({ href, children, ...props }) {

    // Comparação para o Active

    //Conversão absoluta ou relativa do link
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={href} {...props}>{children}</Link>
        </li>
    )
}