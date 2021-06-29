import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <>  
            <span className="navBar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/scoreboard">Scoreboard</NavLink>
                <NavLink to="/game">New Game</NavLink>
            </span>
        </>
    )
}