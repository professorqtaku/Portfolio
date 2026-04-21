interface WrapperProps {
  children: React.ReactNode;
  onClick: () => void;
  buttonType?: 'primary' | 'secondary' | 'danger';
  className?: string;
}
const Button =({ children, onClick, buttonType = 'primary', className = "" }: WrapperProps) => {

    const buttonStyles = {
        primary: 'bg-primary text-text hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover: cursor-pointer hover: shadow-lg transition duration-300 ease-in-out   ',
        secondary: 'bg-neutral-dark text-blue-text hover:opacity-90 font-bold py-2 px-4 rounded',
        danger: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
    };
    return ( 
        <button onClick={onClick} className={`btn hover:cursor-pointer hover: ${buttonStyles[buttonType]} ${className}`} type="button">
            {children}
        </button>
     );
}

export default Button;