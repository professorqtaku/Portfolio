import ExperienceItem from "./ExperienceItem";

type ExperienceSectionProps = {
    experience: {
        title: string;
        responsibilities: string[];
        period: string;
        company: string;
        skills: string[];
    }[];
}

function ExperienceSection({ experience }: ExperienceSectionProps) {
    return (
        <section id="experience" className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 bg-white rounded-lg border-4 border-secondary-container window-shadow sticker-glow p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-secondary-container/50 h-10 border-b-4 border-secondary-container flex items-center px-6">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>folder</span>
                        <span className="font-label-lg text-secondary text-xs uppercase tracking-widest">Career_Logs</span>
                    </div>
                </div>
                <div className="mt-8 space-y-16">
                    {experience.map((exp, index) => (
                        <ExperienceItem
                            key={`exp-${index}`}
                            title={exp.title}
                            descriptions={exp.responsibilities}
                            period={exp.period}
                            workplace={exp.company}
                            skills={exp.skills}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;