import Section from "../components/Section";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import ExperienceItem from "../components/ExperienceItem";
import cv from '../assets/cv.json';
import ProjectItem from "../components/ProjectItem";

function Home() {
    const experienceData = cv.sv.experience;
    const projectData = cv.sv.projects;
    
    return ( 
        <div className="content">
            {/* Hero Section */}
            <Section className="bg-primary/10 relative pb-12">
                <div className="flex justify-between items-start gap-6">
                    <div className="flex-1">
                        <h2 className="text-primary font-bold uppercase text-sm mb-2">Fullstack Developer</h2>
                        <h1 className="text-5xl font-bold mb-4">Qiling Tan</h1>
                        <p className="text-blue-text text-sm leading-relaxed mb-6 opacity-90">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime assumenda nesciunt tempora ipsum quae incidunt officia itaque esse facilis maiores.
                        </p>
                        <div className="flex gap-4">
                            <Button buttonType="primary" onClick={() => {window.open('https://github.com/professorqtaku','_blank', 'rel=noopener noreferrer')}}>Get in Touch</Button>
                            <Button buttonType="secondary" onClick={() => {window.open('https://professorqtaku.github.io/My_CV/','_blank', 'rel=noopener noreferrer')}}>View CV</Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* About Section */}
            <Section className="bg-neutral-dark/10 p-6 rounded-xl pb-12">
                <SectionTitle className="mb-4">About</SectionTitle>
                <ul className="space-y-4 md:text-lg">
                    <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-blue-text leading-snug">Specializing in high-performance React and Node.js architectures.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-blue-text leading-snug">Focused on clean, maintainable codebases and modern UI design.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-blue-text leading-snug">5+ years experience delivering scalable solutions.</span>
                    </li>
                </ul>
            </Section>

            {/* Experience Section */}
            <Section className="mb-12">
                <SectionTitle className="mb-6">Erfarenhet</SectionTitle>
                <div className="experience-list flex flex-col gap-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-neutral-dark/15">
                    {experienceData.map((exp, index) => (
                        <div key={`exp-${index}`} className="relative pl-10">
                            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-4 border-primary z-10"></div>
                            <ExperienceItem
                                title={exp.title}
                                descriptions={exp.responsibilities}
                                period={exp.period}
                                workplace={exp.company}
                                skills={exp.skills}
                            />
                        </div>
                    ))}
                </div>
            </Section>

            {/* Projects Section */}
            <Section className="mb-12 bg-primary/10">
                <div className="flex justify-between items-end mb-6">
                    <SectionTitle>Projekt</SectionTitle>
                    <div className="h-[2px] flex-grow mx-4 bg-neutral-dark/10"></div>
                </div>
                <p className="text-sm text-blue-text mb-10">Utvalda projekt</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projectData.map((project, index) => (
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
                <div className="mt-10 text-center">
                    <Button buttonType="secondary" onClick={() => {window.open('https://github.com/professorqtaku','_blank', 'rel=noopener noreferrer')}}>Visa alla Projekt</Button>
                </div>
            </Section>
        </div>
    );
}

export default Home;