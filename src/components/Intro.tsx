import SectionTitle from "./SectionTitle";

function Intro() {
    return (  
        <div className="bg-secondary-container/40 rounded-lg border-4 border-secondary-container window-shadow sticker-glow p-8" id="About_Me">
            <SectionTitle className="mb-6">About Me</SectionTitle>
            <ul className="space-y-4 md:text-lg">
                <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-on-surface leading-snug">Specializing in fullstack development with a focus on React and Node.js.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-on-surface leading-snug">Focused on clean, maintainable code and modern UI design.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-on-surface leading-snug">2+ years of experience delivering scalable solutions.</span>
                </li>
            </ul>
        </div>
    );
}

export default Intro;