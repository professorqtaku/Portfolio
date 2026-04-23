function Footer() {
    return (
        <footer className="w-full border-t-2 border-secondary-container/50 bg-secondary-container/40 backdrop-blur-md">
            <div className="flex flex-col md:flex-row justify-between items-center px-10 py-6 w-full gap-4 max-w-6xl mx-auto">
                <div className="font-bold text-xs uppercase tracking-widest text-secondary">
                    System Status: Adorable • StarOS v1.0.2
                </div>
                <div className="flex gap-8">
                    <a href="https://github.com/professorqtaku" target="_blank" rel="noopener noreferrer" className="font-bold text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200 hover:underline decoration-primary decoration-2 underline-offset-4">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/qiling-tan" target="_blank" rel="noopener noreferrer" className="font-bold text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200 hover:underline decoration-primary decoration-2 underline-offset-4">
                        LinkedIn
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-bold text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-200 hover:underline decoration-primary decoration-2 underline-offset-4">
                        Twitter
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <span className="font-bold text-xs text-secondary opacity-60">Made with StarOS</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;