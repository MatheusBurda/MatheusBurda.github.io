import { useEffect, useState } from "react";
import { Project } from "../Project";

const REPOSITORIES_URL = "https://api.github.com/users/MatheusBurda/repos";

interface GithubRepository {
    id: number;
    name: string;
    has_pages: boolean;
    homepage: string;
    html_url: string;
    languages: string;
    description: string;
}

export function Portfolio() {

    const [projects, setProjects] = useState<GithubRepository[]>([]);

    useEffect(() => {
        fetch(REPOSITORIES_URL)
        .then(data => data.json())
        .then(data => setProjects(data));
    }, [])


    return (
        <>
            {projects.map((project) => {
                return project.description ? <Project key={project.id} repository={project} /> : <></>;
            }) }
        </>
    )
}
