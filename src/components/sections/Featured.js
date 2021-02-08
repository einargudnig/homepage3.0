import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '../../utils/sr';
import { srConfig } from '../../utils/config';
import { Icon } from '../icons';
import { featured } from '../../static/featured';

// import course from '../../static/coursesFull.png'
// import reboot from '../../static/rebootFull.jpg'


const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 0 5px 10px;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: ${({ theme }) => theme.accentColor};
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: ${({ theme }) => theme.textMain};
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: ${({ theme }) => theme.textMain};
    }
  }

  .project-description {
    box-shadow: 0 10px 30px -15px ${({ theme }) => theme.backgroundShadow};
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${({ theme }) => theme.backgroundShadow};
    }
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: ${({ theme }) => theme.backgroundSecondary};
    color: ${({ theme }) => theme.textMain};
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        position: relative;
        transition: var(--transition);
        cursor: pointer;
        color: ${({ theme }) => theme.accentColor};
        &:hover,
        &:focus,
        &:active {
          color: ${({ theme }) => theme.accentColor};
          outline: 0;
          &:after {
            width: 100%;
          }
          & > * {
            color: ${({ theme }) => theme.accentColor} !important;
            transition: var(--transition);
          }
        }
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          position: relative;
          bottom: 0.37em;
          background-color: ${({ theme }) => theme.accentColor};
          transition: var(--transition);
          opacity: 0.5;
        }
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: ${({ theme }) => theme.textMain};
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: ${({ theme }) => theme.textMain};
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: ${({ theme }) => theme.textMain};

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    
    transition: var(--transition);

    &:hover,
    &:focus {
    }
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      
    }

    a {
      width: 100%;
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover {
      }
      &:focus {
        background: transparent;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        
        
      }
    }

    .img {
      border-radius: var(--border-radius);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
      }
    }
  }

  .wrapper {
    transition: var(--transition);

    &:hover,
    &:focus {
    }

    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
    }

    &:after {
      border: 2px solid ${({ theme }) => theme.accentColor};
      top: 20px;
      left: 20px;
      z-index: -1;
    }

`;


const Featured = () => {

    const featuredData = featured;

    const revealTitle = useRef(null);
    const revealProjects = useRef([]);
    useEffect(() => {
      sr.reveal(revealTitle.current, srConfig());
      revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }, []);

    return(
        <section id="projects">
            <h2 className="numbered-heading" ref={revealTitle}>
                Some Things I have Built
            </h2>

            <div>
                {featuredData &&
                    featuredData.map(({ date, title, cover, github, external, tech1, tech2, tech3, tech4, text }, i) => {
                        const bigTech = [ tech1, tech2, tech3, tech4 ];

                        return (
                            <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                                <div className="project-content">
                                    <p className="project-overline">Featured Projects</p>
                                    <h3 className="project-title">{title}</h3>
                                    <div className="project-description" dangerouslySetInnerHTML={{ __html: text}} />

                                    <ul className="project-tech-list">
                                        {bigTech && bigTech.map((tech, i) => <li key={i}>{tech}</li>)}
                                    </ul>

                                    <div className="project-links">
                                        {github && (
                                            <a href={github} aria-label="Github Link">
                                                <Icon name="GitHub" />
                                            </a>
                                        )}
                                        {external && (
                                            <a href={external} aria-label="External Link" className="external">
                                                <Icon name="External" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="project-image">
                                    {cover && (
                                    <div className="wrapper">
                                      <a href={external ? external : github ? github : '#'}>
                                        <img src={cover} alt={title} className="img" width="580" height="250" /> 
                                      </a>
                                    </div>
                                    )}
                                </div>
                            </StyledProject>
                        );
                    })}
            </div>
        </section>
    );
};

export default Featured;