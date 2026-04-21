import { NavLink } from "react-router";

function Header() {
    return ( 
        <header className="header bg-neutral text-text px-10 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Qiling Tan</h1>
            <nav className="flex gap-4 text-lg">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/experience">Experience</NavLink>
            </nav>
        </header>
     );
}

export default Header;