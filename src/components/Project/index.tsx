import { useEffect, useState } from 'react'
import { Container, Content, TechIconDiv } from './style'

import { TechIcon } from '../../assets'

interface ProjectProps {
    repository: {
        name: string;
        has_pages: boolean;
        homepage: string;
        html_url: string;
        languages_url: string;
        description: string;
    }
}


export function Project({ repository }: ProjectProps) {

    const imageRegEx = /!\[.*]\(.*\)/g;
    const [imageLink, setImageLink] = useState('');

    const [languages, setLanguages] = useState<string[]>([]);

    useEffect(() => {

        fetch(`https://raw.githubusercontent.com/MatheusBurda/${repository.name}/master/README.md`)
            .then((res) => res.text())
            .then((data) => {

                const matchImage = data.match(imageRegEx);

                if (matchImage) {
                    const image = matchImage[0];
                    setImageLink(`${image.substring(image.indexOf('(') + 1, image.indexOf(')'))}?raw=true`);
                }

            });

        fetch(repository.languages_url)
            .then((res) => res.json())
            .then((data) => {
                setLanguages(Object.keys(data));
            });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Container>

            <Content>
                <h2>{repository.name}</h2>
                <p>{repository.description}</p>


                <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='underline-hover-effect'>
                        View on Github
                    </div>
                </a>

                {repository.has_pages &&
                    <a
                        href={repository.homepage}

                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className='underline-hover-effect'>
                            Visit project homepage
                        </div>
                    </a>
                }

                <TechIconDiv>

                    {languages.map((lang) => TechIcon(lang, repository.name))}

                </TechIconDiv>

            </Content>

            {imageLink && <img src={imageLink} alt={`${repository.name} Preview`} />}
        </Container>
    )
}
