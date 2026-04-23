import ProjectItem from "../components/ProjectItem";
import { cv } from "../data/cv";

function ProjectsPage() {
    return (
        <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 space-y-16">
            <section className="space-y-6">
                <h1 className="font-headline-xl text-on-surface text-4xl md:text-5xl">Projects</h1>
                <p className="text-on-surface-variant text-lg max-w-2xl">
                    A collection of projects I've worked on, showcasing my skills in web development and design.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cv.projects.map((project, index) => (
                    <ProjectItem
                        key={`project-${index}`}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        url={project.link}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </section>
        </div>
    );
}

export default ProjectsPage;