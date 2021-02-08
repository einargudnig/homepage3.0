import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
// import { navDelay, loaderDelay } from '../../utils/index';
import Typewriter from 'typewriter-effect';

const StyledHeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;

    h1 {
        margin: 0 0 30px 4px;
        color: ${({ theme }) => theme.accentColor};
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 400;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
          }
    }

    h3 {
        margin-top: 10px;
        color: ${({ theme }) => theme.textMain};
        line-height: 0.9;
      }
    
    p {
        margin: 20px 0 0;
        max-width: 500px;
    }

    .resume-button {
        margin-top: 50px;
        font-size: var(--fz-xs);

        color: ${({ theme }) => theme.accentColor};
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.accentColor};
        border-radius: var(--border-radius);
        padding: 1.25rem 1.75rem;
        font-size: var(--fz-sm);
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: var(--transition);
        &:hover,
        &:focus,
        &:active {
        background-color: ${({ theme }) => theme.accentTint};
        }
        &:after {
        display: none !important;
        }
    }
`;


const Hero = () => {

    const h1 = <h1>Hi 👋, my name is</h1>;
    const h2 = <h2 className="big-heading">Einar Guðni.</h2>
    const h3 = (
        <h3 className="big-heading">
            <Typewriter
              options={{
                  strings: ['I am a software developer.', 'I try to build things for the web.', 'I like to learn new things.'],
                  autoStart: true,
                  skipAddStyles: true,
                  pauseFor: 1500,
                  loop: true,
              }}
            />
        </h3>
    );

    const h4 = (
        <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
        </a>
    );

    const items = [h1, h2, h3, h4];

    return(
        <StyledHeroSection>
            <TransitionGroup component={null}>
                {items.map((item, i) => (
                    <CSSTransition key={i} classNames="fadeup" timeout={500}>
                        <div>
                            {item}
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </StyledHeroSection>
    );
};

export default Hero;