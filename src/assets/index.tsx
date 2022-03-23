import { ReactComponent as CppSVG } from './Cpp.svg';
import { ReactComponent as ReactSVG } from './React.svg';
import { ReactComponent as PythonSVG } from './Python.svg';
import { ReactComponent as CSVG } from './C.svg';
import { ReactComponent as JavaScriptSVG } from './JavaScript.svg';
import { ReactComponent as TypeScriptSVG } from './TypeScript.svg';
import { ReactComponent as HTMLSVG } from './HTML.svg';
import { ReactComponent as CSSSVG } from './CSS.svg';

import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Email } from './email.svg';
import { ReactComponent as Spotify } from './spotify.svg';
import { ReactComponent as Youtube } from './youtube.svg';


export function TechIcon(icon: string, repoName: string) {

    switch (icon) {
        case 'react':
            return <ReactSVG key={`React_${repoName}`} className='tech-icon' />;
        case 'cpp':
            return <CppSVG key={`C++_${repoName}`} className='tech-icon' />;
        case 'python':
            return <PythonSVG key={`Python_${repoName}`} className='tech-icon' />;
        case 'c':
            return <CSVG key={`C_${repoName}`} className='tech-icon' />;
        case 'javascript':
            return <JavaScriptSVG key={`JavaScript_${repoName}`} className='tech-icon' />;
        case 'typescript':
            return <TypeScriptSVG key={`TypeScript_${repoName}`} className='tech-icon' />;
        case 'html':
            return <HTMLSVG key={`HTML_${repoName}`} className='tech-icon' />;
        case 'css':
            return <CSSSVG key={`CSS_${repoName}`} className='tech-icon' />;
        default:
            return null;
    }

}

export function SocialIcon(social: string){
    switch(social){
        case 'Linkedin':
            return <Linkedin key={`Linkedin`} className='social-icon' />;
        case 'Email':
            return <Email key={`Email`} className='social-icon' />;
        case 'Spotify':
                return <Spotify key={`Spotify`} className='social-icon' />;
        case 'Youtube':
            return <Youtube key={`Youtube`} className='social-icon' />;
        default:
            return null;
    }
}
