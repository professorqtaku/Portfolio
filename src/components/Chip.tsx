type ChipProps = {
    text: string;
    type?: 'primary' | 'secondary';
    className?: string;
}

function Chip ({ text, type = 'primary', className }: ChipProps) {
    const typeStyles = type === 'primary' 
        ? 'bg-primary text-white' 
        : 'bg-muted-blue-light text-muted-blue-dark';
    
    return ( 
        <div className={`font-bold inline-block px-3 py-1 rounded-full text-sm ${typeStyles} ${className || ''}`} >
            {text}
        </div>
     );
}

export default Chip;