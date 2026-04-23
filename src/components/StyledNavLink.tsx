import type { MouseEventHandler } from "react";
import { NavLink } from "react-router";

type StyledNavLinkProps = {
    onClick?: MouseEventHandler;
    to: string;
    children?: React.ReactNode;
    variant?: 'button' | 'link';
    className?: string;
}
function StyledNavLink ({onClick, to = "/", children, variant="link", className }: StyledNavLinkProps) {
    const basicStyles = "block";
    const inactiveStyle = variant == "button" 
        ? "text-on-surface-variant px-6 py-2 hover:bg-secondary-container/30 rounded-full hover:scale-110 hover:rotate-2 transition-all duration-300 w-full text-center"
        : "text-primary font-bold cursor-pointer hover:translate-x-2 transition duration-300";
    const activeStyle = variant == "button" 
        ? "bg-primary text-on-primary px-6 py-2 rounded-full scale-105 transition-all duration-300 w-full text-center"
        : "text-secondary";

        const icon = variant == "button" ? <></> : 
            <i className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_right_alt</i>;
    
    return ( <NavLink to={to} className={({ isActive }) => 
                        isActive 
                        ? activeStyle + " " + className + " " + basicStyles
                        : inactiveStyle + " " + className + " " + basicStyles
                    } onClick={onClick}>
                        {children}
                        {icon}
                    </NavLink>
                );
}

export default StyledNavLink ;