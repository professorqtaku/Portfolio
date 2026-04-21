import { NavLink } from "react-router";

function Header() {
    return ( 
        <header className="header">
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/experience">Experience</NavLink>
            </nav>
        </header>
     );
}

export default Header;