interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

function Section ({ children, className, isFullWidth = false }: WrapperProps) {
    const widthClass = isFullWidth ? "w-full" : "w-full";
    return ( 
        <section className={`${widthClass} ${className}`}>
            {children}
        </section>
     );
}

export default Section;