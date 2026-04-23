interface WrapperProps {
  children: React.ReactNode;
  onClick?: () => void;
  buttonType?: 'primary' | 'secondary' | 'tertiary' | 'nav';
  className?: string;
  href?: string;
}

const Button = ({ children, onClick, buttonType = 'primary', className = "", href }: WrapperProps) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold px-8 py-3 rounded-full transition-all duration-300 active:translate-y-1 cursor-pointer';
    
    const buttonStyles = {
        primary: 'bg-primary-container text-on-primary-container border-b-4 border-tertiary hover:scale-105',
        secondary: 'bg-white text-secondary border-4 border-secondary-container hover:bg-secondary-container/30',
        tertiary: 'bg-tertiary-container text-on-tertiary-container border-b-4 border-on-tertiary-fixed-variant hover:scale-105',
        nav: 'text-on-surface-variant hover:bg-secondary-container/30 hover:scale-110 hover:rotate-2',
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        if (href?.startsWith('#')) {
            e.preventDefault();
            const id = href.slice(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (onClick) {
            onClick();
        }
    };

    const isExternal = href?.startsWith('http') || href?.startsWith('mailto:');
    const Component = href ? 'a' : 'button';
    const props = href 
        ? { 
            href, 
            onClick: handleClick,
            ...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}) 
          }
        : { onClick: handleClick };

    return (
        <Component 
            {...props}
            className={`${baseStyles} ${buttonStyles[buttonType]} ${className}`}
            type={href ? undefined : 'button'}
        >
            {children}
        </Component>
    );
};

export default Button;