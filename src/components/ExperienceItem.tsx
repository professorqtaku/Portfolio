import Chip from "./Chip";

type ExperienceItemProps = {
    title: string;
    descriptions: string[];
    period: string;
    workplace: string;
    skills: string[];
    index?: number;
}

function ExperienceItem ({ title, descriptions, period, workplace, skills, index = 0 }: ExperienceItemProps) {
    const iconRotations = ['rotate-12', '-rotate-12', 'rotate-45', 'rotate-0'];
    const colors = ['text-primary-container', 'text-secondary-fixed-dim', 'text-tertiary-container', 'text-primary'];
    
    return ( 
        <div className="relative pl-12">
            <div className={`absolute left-0 top-0 ${colors[index % colors.length]} scale-150 ${iconRotations[index % iconRotations.length]}`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            {index < 3 && <div className="absolute left-4 top-8 bottom-0 w-1 bg-secondary-container rounded-full"></div>}
            <div className="space-y-2">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-headline-md text-on-surface text-xl md:text-2xl" >{title}</h3>
                        <p className="font-label-lg text-primary">{workplace} • {period}</p>
                    </div>
                </div>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                    {descriptions[0]}
                </p>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, skillIndex) => 
                        <Chip key={`experience-skill-item-${skillIndex}`} text={skill} type="secondary" className="text-xs" />)}
                </div>
            </div>
        </div> 
    );
}

export default ExperienceItem;