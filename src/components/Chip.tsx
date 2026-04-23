type ChipProps = {
    text: string;
    type?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    icon?: string;
}

function Chip ({ text, type = 'primary', className, icon }: ChipProps) {
    const typeStyles = type === 'primary' 
        ? 'bg-secondary-container text-on-secondary-container' 
        : type === 'tertiary'
        ? 'bg-tertiary-container text-on-tertiary-container'
        : 'bg-surface-container-high text-on-surface-variant';
    
    return ( 
        <div className={`font-label-lg inline-flex items-center gap-1.5 px-4 py-2 rounded-full ${typeStyles} ${className || ''}`} >
            {icon && <i className="material-symbols-outlined text-sm">{icon}</i>}
            {text}
        </div>
     );
}

export default Chip;