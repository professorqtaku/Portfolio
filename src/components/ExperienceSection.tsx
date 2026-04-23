import { NavLink } from "react-router";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "../data/experiences";

type ExperienceSectionProps = {
    className?: string
}

function ExperienceSection({ className }: ExperienceSectionProps) {
        const careerData = experiences.filter(exp => exp.showInHome);
        const sectionClassName = `"bg-white rounded-lg border-4 border-secondary-container window-shadow sticker-glow p-8 relative overflow-hidden" ${className}`
    
    return (
            <section className={sectionClassName}>
                <div className="absolute top-0 left-0 right-0 bg-secondary-container/50 h-10 border-b-4 border-secondary-container flex items-center px-6">
                    <div className="flex items-center gap-3">
                        <i className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>folder</i>
                        <span className="font-label-lg text-secondary text-xs uppercase tracking-widest">Career_Logs</span>
                    </div>
                </div>
                <div className="mt-8 space-y-16">
                    {careerData.map((exp, index) => (
                        <ExperienceItem
                            key={`exp-${index}`}
                            title={exp.title}
                            descriptions={exp.descriptions}
                            period={exp.period}
                            workplace={exp.company}
                            skills={exp.skills}
                            index={index}
                        />
                    ))}
                </div>
                <NavLink to="/experience">See all experiences here</NavLink>
            </section>
    );
}

export default ExperienceSection;