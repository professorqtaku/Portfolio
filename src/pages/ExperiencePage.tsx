import ExperienceRow from "../components/ExperienceRow";
import { experiences } from "../data/experiences";

function ExperiencePage() {
    return (
        <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 space-y-16">
            <section className="space-y-6">
                <h1 className="font-headline-xl text-on-surface text-4xl md:text-5xl">Experience</h1>
                <p className="text-on-surface-variant text-lg max-w-2xl">
                    A chronological overview of my professional journey, from software development to various roles in healthcare and service industries.
                </p>
            </section>

            <section className="space-y-4">
                {experiences.map((exp, index) => (
                    <ExperienceRow
                        key={`exp-${index}`}
                        title={exp.title}
                        company={exp.company}
                        period={exp.period}
                        location={exp.location}
                        workMode={exp.workMode}
                        type={exp.type}
                        descriptions={exp.descriptions}
                        skills={exp.skills}
                    />
                ))}
            </section>
        </div>
    );
}

export default ExperiencePage;