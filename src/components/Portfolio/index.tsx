import { Container } from "./style";
import { useEffect, useState } from "react";
import { Project } from "../Project";

const REPOSITORIES_URL = "https://api.github.com/users/MatheusBurda/repos";

interface GithubRepository {
    id: number;
    name: string;
    has_pages: boolean;
    homepage: string;
    html_url: string;
    languages_url: string;
    description: string;
    topics: string[];
}

export function Portfolio() {

    const [projects, setProjects] = useState<GithubRepository[]>([]);

    useEffect(() => {
        fetch(REPOSITORIES_URL)
            .then(data => data.json())
            .then(data => setProjects(data));
    }, []);


    return (
        <Container>
            {projects.map((project) => {
                return project.description ? <Project key={project.id} repository={project} /> : null;
            })}
        </ Container>
    )
}
