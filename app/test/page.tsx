import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";

export default async function page() {
    const projects = await getProjects();

    return (
        <div>
            TESTING
            {projects.map((project: Project) => (
                <div key={project._id}>
                    {project.name}
                </div>
            ))}
        </div>
    );
}
