import type { MouseEventHandler } from "react";
import { NavLink } from "react-router";

type StyledNavLinkProps = {
    onClick: MouseEventHandler;
    to: string;
    children?: React.ReactNode;
}
function StyledNavLink ({onClick, to = "/", children }: StyledNavLinkProps) {
    const inactiveStyle = "text-on-surface-variant px-6 py-2 hover:bg-secondary-container/30 rounded-full hover:scale-110 hover:rotate-2 transition-all duration-300 w-full text-center";
    const activeStyle = "bg-primary text-on-primary px-6 py-2 rounded-full scale-105 transition-all duration-300 w-full text-center";
    
    return ( <NavLink to={to} className={({ isActive }) => 
                        isActive 
                        ? activeStyle
                        : inactiveStyle
                    } onClick={onClick}>{children}</NavLink>
                );
}

export default StyledNavLink ;