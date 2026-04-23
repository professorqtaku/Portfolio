import { NavLink } from "react-router";
import Button from "./Button";

function Header() {
    return ( 
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center max-w-6xl mx-auto px-4 mt-6">
            <div className="flex items-center justify-between w-full bg-white/70 backdrop-blur-xl rounded-full border-4 border-secondary-container shadow-[0_8px_0_0_rgba(175,203,213,0.3)] px-6 py-3">
                <NavLink to="/" className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-2xl font-black text-primary-container drop-shadow-[0_2px_0_rgba(129,83,85,0.2)]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-2xl font-black text-primary-container drop-shadow-[0_2px_0_rgba(129,83,85,0.2)]">Qiling Tan</span>
                </NavLink>
                <div className="hidden md:flex items-center gap-2 font-bold text-sm tracking-tight">
                    <NavLink to="/" className={({ isActive }) => 
                        isActive 
                        ? "bg-primary text-on-primary px-6 py-2 rounded-full scale-105 transition-all duration-300"
                        : "text-on-surface-variant px-6 py-2 hover:bg-secondary-container/30 rounded-full hover:scale-110 hover:rotate-2 transition-all duration-300"
                    }>Home</NavLink>
                    <NavLink to="/experience" className={({ isActive }) => 
                        isActive 
                        ? "bg-primary text-on-primary px-6 py-2 rounded-full scale-105 transition-all duration-300"
                        : "text-on-surface-variant px-6 py-2 hover:bg-secondary-container/30 rounded-full hover:scale-110 hover:rotate-2 transition-all duration-300"
                    }>Experience</NavLink>
                    <Button href="#My_Creations" buttonType="secondary" className="px-6 py-2">Projects</Button>
                    <Button href="#contact" buttonType="secondary" className="px-6 py-2">Contact</Button>
                </div>
                <Button className="hidden md:block" href="#">Resume.pdf</Button>
            </div>
        </header>
    );
}

export default Header;