import { ReactComponent as CppSVG } from './Cpp.svg';
import { ReactComponent as ReactSVG } from './React.svg';
import { ReactComponent as PythonSVG } from './Python.svg';
import { ReactComponent as CSVG } from './C.svg';
import { ReactComponent as JavaScriptSVG } from './JavaScript.svg';
import { ReactComponent as TypeScriptSVG } from './TypeScript.svg';
import { ReactComponent as HTMLSVG } from './HTML.svg';
import { ReactComponent as CSSSVG } from './CSS.svg';


export function TechIcon(icon: string, repoName: string) {

    switch (icon) {
        case 'React':
            return <ReactSVG key={`React_${repoName}`} className='tech-icon' />;
        case 'C++':
            return <CppSVG key={`C++_${repoName}`} className='tech-icon' />;
        case 'Python':
            return <PythonSVG key={`Python_${repoName}`} className='tech-icon' />;
        case 'C':
            return <CSVG key={`C_${repoName}`} className='tech-icon' />;
        case 'JavaScript':
            return <JavaScriptSVG key={`JavaScript_${repoName}`} className='tech-icon' />;
        case 'TypeScript':
            return <TypeScriptSVG key={`TypeScript_${repoName}`} className='tech-icon' />;
        case 'HTML':
            return <HTMLSVG key={`HTML_${repoName}`} className='tech-icon' />;
        case 'CSS':
            return <CSSSVG key={`CSS_${repoName}`} className='tech-icon' />;
        default:
            return null;
    }

}
