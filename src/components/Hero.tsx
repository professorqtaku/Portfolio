import Button from "./Button";
import Chip from "./Chip";
import Profile from "../assets/profile.jpg";

interface HeroProps {
    name: string;
    title: string;
    location?: string;
    skills?: string;
}

function Hero({ name, title, location = "Lund, Sweden", skills = "React & Node.js" }: HeroProps) {
    return (
        <section className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white rounded-lg border-4 border-secondary-container window-shadow sticker-glow p-8 flex flex-col md:flex-row gap-10 items-center overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-secondary-container/50 h-10 border-b-4 border-secondary-container flex items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-label-lg text-secondary text-xs uppercase tracking-widest">Identity.exe</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-tertiary-container shadow-inner"></div>
                        <div className="w-3 h-3 rounded-full bg-primary-container shadow-inner"></div>
                        <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim shadow-inner"></div>
                    </div>
                </div>
                <div className="w-64 h-64 flex-shrink-0 relative mt-8 md:mt-0">
                    <div className="absolute inset-0 bg-secondary-container rounded-full rotate-6 scale-105 border-4 border-white shadow-lg"></div>
                    <img src={Profile} alt={name} className="w-full h-full object-cover rounded-full border-4 border-white relative z-10" />
                </div>
                <div className="flex-1 space-y-6 mt-4">
                    <div className="space-y-2">
                        <h1 className="font-headline-xl text-on-surface text-4xl md:text-5xl">Hi, I'm {name}!</h1>
                        <p className="font-body-lg text-secondary">
                            I'm a <span className="bg-primary-fixed px-2 py-1 rounded-md text-on-primary-fixed">{title}</span> who builds cozy, squishy, and user-friendly digital experiences. I believe technology should feel like a warm hug.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Chip text={location} type="primary" icon="location_on" />
                        <Chip text={skills} type="secondary" icon="terminal" />
                    </div>
                    <div className="flex gap-4">
                        <Button onClick={() => window.open('mailto:qiling.tan@example.com')}>Let's Chat!</Button>
                        <Button buttonType="secondary" href="https://professorqtaku.github.io/My_CV/">Portfolio</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;