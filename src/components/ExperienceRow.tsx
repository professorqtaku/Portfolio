import Chip from "./Chip";

type ExperienceRowProps = {
    title: string;
    company: string;
    period: string;
    location: string;
    workMode: string;
    type: string;
    descriptions: string[];
    skills: string[];
}

function ExperienceRow({ title, company, period, location, workMode, type, descriptions, skills }: ExperienceRowProps) {
    return (
        <div className="p-6 bg-white rounded-lg border-4 border-secondary-container window-shadow transition-all duration-300 hover:scale-[1.01] hover:sticker-glow hover:bg-secondary-container/40">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="lg:w-1/4 space-y-2">
                    <h3 className="font-headline-md text-on-surface text-lg">{title}</h3>
                    <p className="font-label-lg text-primary">{company}</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-surface-container-high rounded-full text-on-surface-variant">{period}</span>
                        <span className="text-xs px-2 py-1 bg-secondary-container/50 rounded-full text-on-secondary-container">{type}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-on-surface-variant">
                        <i className="material-symbols-outlined text-sm">location_on</i>
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-on-surface-variant">
                        <i className="material-symbols-outlined text-sm">schedule</i>
                        <span>{workMode}</span>
                    </div>
                </div>
                <div className="lg:w-2/4 space-y-3">
                    <ul className="space-y-2">
                        {descriptions.map((desc, index) => (
                            <li key={index} className="flex items-start gap-2 text-on-surface-variant text-sm">
                                <i className="material-symbols-outlined text-primary-container text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check</i>
                                <span>{desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:w-1/4">
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <Chip key={index} text={skill} type="secondary" className="text-xs" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceRow;