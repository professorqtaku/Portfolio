interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

function Section ({ children, className }: WrapperProps) {
    return ( 
        <section className={"w-full p-10 md:p-20" + " " + className}>
            {children}
        </section>
     );
}

export default Section ;