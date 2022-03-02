import { useEffect, useState } from 'react'
import { Container, Content } from './style'

import svg_cpp from '../../assets/React.svg'

interface ProjectProps {
    repository: {
        name: string;
        has_pages: boolean;
        homepage: string;
        html_url: string;
        languages: string;
        description: string;
    }/* ,
    titleOnLeft: boolean; */
}


export function Project({ repository }: ProjectProps) {

    const [links, setLinks] = useState('');
    const [imageLink, setImageLink] = useState('');

    const imageRegEx = /!\[.*]\(.*\)/ig;
    const linksRegEx = /\[.*]\(.*\)/g;

    useEffect(() => {

        fetch(`https://raw.githubusercontent.com/MatheusBurda/${repository.name}/master/README.md`)
            .then((res) => res.text())
            .then((data) => {

                const image = data.match(imageRegEx)![0];

                setImageLink(`${image.substring(image.indexOf('(') + 1, image.indexOf(')'))}?raw=true`);

                const itr = data.matchAll(linksRegEx);

                for (const link of itr) {
                    console.log(`${repository.name} - ${link}`);
                }
            });

    }, []);


    return (
        <Container>

            <Content>
                <h2>{repository.name}</h2>
                <p>{repository.description}</p>

                {repository.has_pages &&
                    <a
                        href={repository.homepage}
                        className='underline-hover-effect'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to homepage
                    </a>}


                <a
                    href={repository.html_url}
                    className='underline-hover-effect'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on Github
                </a>

                <img src={svg_cpp} alt="C++" />

            </Content>

            {imageLink && <img src={imageLink} alt={`${repository.name} Preview`} />}
        </Container>
    )
}
