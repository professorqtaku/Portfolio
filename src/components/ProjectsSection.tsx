import ProjectItem from "./ProjectItem";

type ProjectsSectionProps = {
    projects: {
        title: string;
        description: string;
        technologies: string[];
        link: string;
        imageUrl?: string;
    }[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section className="space-y-6" id="My_Creations">
            <div className="flex items-center gap-4 px-4">
                <span className="material-symbols-outlined text-primary-container text-4xl">auto_stories</span>
                <h2 className="font-headline-xl text-on-surface">My_Creations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectItem
                        key={`project-${index}`}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        url={project.link}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;