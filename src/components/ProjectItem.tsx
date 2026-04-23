import Chip from "./Chip";

type ProjectItemProps = {
    title: string;
    imageUrl?: string;
    description: string;
    technologies: string[];
    url: string;
    year?: string;
}

function ProjectItem ({ title, imageUrl, description, technologies, url }: ProjectItemProps) {
    return ( 
        <div className="group cursor-pointer" onClick={() => window.open(url, '_blank')}>
            <div className="bg-white rounded-lg border-4 border-secondary-container window-shadow sticker-glow p-6 relative transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1">
                <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border-2 border-secondary-container MB-4 relative">
                    {imageUrl && <img src={imageUrl} alt={title} className="w-full h-full object-cover" />}
                    <div className="absolute top-2 right-2 px-2 py-1 bg-primary-container text-on-primary-container text-[10px] font-black rounded-full uppercase">Active</div>
                </div>
                <h4 className="font-headline-md text-on-surface text-xl mt-4">{title}</h4>
                <p className="text-on-surface-variant font-label-sm mt-1">{description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                        {technologies.slice(0, 3).map((tech, index) => (
                            <Chip key={index} text={tech} type="secondary" className="text-xs" />
                        ))}
                    </div>
                    <span className="material-symbols-outlined text-primary-container">open_in_new</span>
                </div>
            </div>
        </div> 
    );
}

export default ProjectItem;