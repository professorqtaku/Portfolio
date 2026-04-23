import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Button from "../components/Button";
import Chip from "../components/Chip";
import ExperienceItem from "../components/ExperienceItem";
import ProjectsSection from "../components/ProjectsSection";
import { experiences } from "../data/experiences";
import cv from '../assets/cv.json';

function Home() {
    const careerData = experiences.filter(exp => exp.showInHome);
    const projectData = cv.en.projects;
    const skills = cv.en.skills;
    
    return ( 
        <div className="content">
            <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 space-y-16">
                <Hero 
                    name="Qiling Tan" 
                    title="Fullstack Developer" 
                    location="Lund, Sweden"
                    skills="React & Node.js"
                />

                <Intro />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8" id="Career_Logs">
                        <section className="bg-white rounded-lg border-4 border-secondary-container window-shadow sticker-glow p-8 relative overflow-hidden">
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
                        </section>
                    </div>
                    <div className="md:col-span-4 bg-secondary-container/40 rounded-lg border-4 border-secondary-container window-shadow sticker-glow p-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 bg-secondary-container/50 h-10 border-b-4 border-secondary-200 flex items-center px-6">
                            <span className="font-label-lg text-secondary text-xs uppercase tracking-widest">System_Specs</span>
                        </div>
                        <div className="mt-8 space-y-6">
                            <div className="space-y-2">
                                <span className="font-label-lg text-on-secondary-container">DEVELOPMENT</span>
                                <div className="space-y-1">
                                    <div className="h-8 bg-white/50 rounded-full border-2 border-white overflow-hidden p-1">
                                        <div className="h-full bg-gradient-to-r from-secondary-fixed-dim to-primary-container rounded-full w-[90%] relative">
                                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:20px_20px] animate-shimmer"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-xs font-bold text-secondary">
                                        <span>React</span>
                                        <span>Expert</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <span className="font-label-lg text-on-secondary-container">SKILLS</span>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <Chip key={index} text={skill} type="secondary" className="text-xs" />
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 bg-primary-fixed/30 rounded-lg border-2 border-primary-container text-center space-y-1">
                                <span className="material-symbols-outlined text-primary-container text-3xl">auto_awesome</span>
                                <p className="font-label-lg text-on-primary-fixed">Ready for the next big adventure!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ProjectsSection projects={projectData} />

                <section id="contact" className="bg-tertiary-container/30 rounded-xl border-4 border-dashed border-tertiary-container p-16 text-center space-y-6 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 text-tertiary-container/20">
                        <span className="material-symbols-outlined text-[200px]">rocket_launch</span>
                    </div>
                    <h2 className="font-headline-xl text-on-tertiary-container">Let's create something magical!</h2>
                    <p className="font-body-lg text-on-tertiary-container max-w-2xl mx-auto opacity-80">
                        I'm currently looking for new opportunities to build joyful software. Whether it's a new product or a complete rebrand, I'm your dev!
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button onClick={() => window.open('mailto:qiling.tan@example.com')}>Say Hello</Button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;