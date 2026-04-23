import { useState } from "react";
import { NavLink } from "react-router";
import Button from "./Button";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = () => {
        window.scroll(0, 0);
        setIsMenuOpen(false);
    };

    return ( 
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center max-w-6xl mx-auto px-4 mt-6">
            <div className="flex items-center justify-between w-full bg-white/70 backdrop-blur-xl rounded-full border-4 border-secondary-container shadow-[0_8px_0_0_rgba(175,203,213,0.3)] px-6 py-3">
                <NavLink to="/" className="flex items-center gap-2" onClick={handleNavClick}>
                    <span className="material-symbols-outlined text-2xl font-black text-primary-container drop-shadow-[0_2px_0_rgba(129,83,85,0.2)]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-2xl font-black text-primary-container drop-shadow-[0_2px_0_rgba(129,83,85,0.2)]">Qiling Tan</span>
                </NavLink>
                
                <button 
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>

                <div className={`flex items-center gap-2 font-bold text-sm tracking-tight ${isMenuOpen ? 'absolute top-full left-0 right-0 mt-4 mx-4 flex-col bg-white/90 backdrop-blur-xl rounded-2xl border-4 border-secondary-container p-4' : 'hidden'}`}>
                    <NavLink to="/" className={({ isActive }) => 
                        isActive 
                        ? "bg-primary text-on-primary px-6 py-2 rounded-full scale-105 transition-all duration-300 w-full text-center"
                        : "text-on-surface-variant px-6 py-2 hover:bg-secondary-container/30 rounded-full hover:scale-110 hover:rotate-2 transition-all duration-300 w-full text-center"
                    } onClick={handleNavClick}>Home</NavLink>
                    <NavLink to="/experience" className={({ isActive }) => 
                        isActive 
                        ? "bg-primary text-on-primary px-6 py-2 rounded-full scale-105 transition-all duration-300 w-full text-center"
                        : "text-on-surface-variant px-6 py-2 hover:bg-secondary-container/30 rounded-full hover:scale-110 hover:rotate-2 transition-all duration-300 w-full text-center"
                    } onClick={handleNavClick}>Experience</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => 
                        isActive 
                        ? "bg-primary text-on-primary px-6 py-2 rounded-full scale-105 transition-all duration-300 w-full text-center"
                        : "text-on-surface-variant px-6 py-2 hover:bg-secondary-container/30 rounded-full hover:scale-110 hover:rotate-2 transition-all duration-300 w-full text-center"
                    } onClick={handleNavClick}>Projects</NavLink>
                    <Button href="#contact" buttonType="secondary" className="px-6 py-2 w-full justify-center" onClick={() => {handleNavClick();}}>Contact</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;