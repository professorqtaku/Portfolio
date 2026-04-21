interface WrapperProps {
  children: React.ReactNode;
  onClick?: () => void;
  buttonType?: 'primary' | 'secondary' | 'danger';
  className?: string;
}
const Button =({ children, onClick, buttonType = 'primary', className = "" }: WrapperProps) => {

    const basicStyles = 'btn font-bold py-2 px-4 rounded hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out';
    const buttonStyles = {
        primary: 'bg-primary text-text',
        secondary: 'bg-neutral-dark text-blue-text',
        danger: 'bg-red-500 text-white',
    };
    return ( 
        <button onClick={onClick} className={`${basicStyles} ${buttonStyles[buttonType]} ${className}`} type="button">
            {children}
        </button>
     );
}

export default Button;