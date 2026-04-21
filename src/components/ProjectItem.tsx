import Chip from "./Chip";

type ProjectItemProps = {
    children?: React.ReactNode;
    title: string;
    imageUrl: string;
    description: string;
    technologies: string[];
    url: string;
    className?: string;
}

function ProjectItem ({children, title, imageUrl, description, technologies, url, className}: ProjectItemProps) {
    const basicStyles = 'text-text bg-neutral p-6 rounded-lg grid grid-cols-1 gap-4 hover:cursor-pointer shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out';
    return ( 
        <div className={`${basicStyles} ${className}`}  onClick={() => window.open(url, '_blank')}>
            {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />}
            <h3 className="md:text-3xl text-lg text-blue-text font-bold" >{title}</h3>
            <p className="text-blue-text text-md">{description}</p>
            <div className="list-disc list-inside flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <Chip key={`project-technology-item-${index}`} text={tech} type="primary" />
                ))}
            </div>
            {children}
        </div> 
    );
}

export default ProjectItem ;