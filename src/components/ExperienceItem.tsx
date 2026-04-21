import Chip from "./Chip";

type ExperienceItemProps = {
    children?: React.ReactNode;
    title: string;
    descriptions: string[];
    period: string;
    workplace: string;
    skills: string[];
    className?: string;
}

function ExperienceItem ({children, title = "", descriptions = [], period = "", workplace = "", skills = [], className}: ExperienceItemProps) {
    const basicStyles = 'text-text';
    return ( 
        <div className={`${basicStyles} ${className}`}>
            <p className="text-accent">{period}</p>
            <h3 className="md:text-3xl text-lg font-bold" >{title}</h3>
            <p className="">{workplace}</p>
            <ul className="list-disc list-inside">
                {descriptions.map((desc, index) => (
                    <li key={`desc-item-${index}`}>{desc}</li>
                ))}
            </ul>
            {skills.length > 0 && skills.map((skill, index) => 
                <Chip key={`experience-skill-item-${index}`} text={skill} type="secondary" className="" />)}
            {children}
        </div> 
    );
}

export default ExperienceItem ;