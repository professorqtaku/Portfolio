type SectionTitleProps = {
    children?: React.ReactNode;
    className?: string;
}

function SectionTitle ({ children, className }: SectionTitleProps) {

    const basicStyles = 'text-3xl font-bold w-full';
    const textStyles = 'text-text';
    return ( 
        <div className={`${basicStyles} ${className}`}>
            <h2 className={`${textStyles}`}>{children}</h2>
        </div>
 );
}

export default SectionTitle;