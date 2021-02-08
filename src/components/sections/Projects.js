import { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '../../utils/config';
import sr from '../../utils/sr';
import { Icon } from '../icons';
import { projects } from '../../static/projects';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    color: ${({ theme }) => theme.accentColor};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.accentColor};
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1.25rem 1.75rem;

    &:hover,
    &:focus,
    &:active {
        background-color: ${({ theme }) => theme.accentTint};
        outline: none;
    }
    &:after {
        display: none !important;
    }
        margin: 80px auto 0;
    }
`;

const StyledProject = styled.div`
  cursor: default;
  transition: var(--transition);

  &:hover,
  &:focus {
    outline: 0;
    .project-inner {
      transform: translateY(-5px);
    }
  }

  .project-inner {
    box-shadow: 0 10px 30px -15px ${({ theme }) => theme.backgroundShadow};
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${({ theme }) => theme.backgroundShadow};
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: ${({ theme }) => theme.backgroundSecondary};
    transition: var(--transition);
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;

    .folder {
      color: ${({ theme }) => theme.accentColor};
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: ${({ theme }) => theme.textMain};

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 7px;

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
  }

  .project-title {
    margin: 0 0 10px;
    color: ${({ theme }) => theme.textMain};
    font-size: var(--fz-xxl);
  }

  .project-description {
    color: ${({ theme }) => theme.textMain};
    font-size: 17px;

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
    align-items: flex-end;
    color: ${({ theme }) => theme.textSecondary };
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      color: ${({ theme }) => theme.textMain};
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Projects = () => {

    const [showMore, setShowMore] = useState(false);
    const revealTitle = useRef(null);
    const revealArchiveLink = useRef(null);
    const revealProjects = useRef([]);
    
    useEffect(() => {
        sr.reveal(revealTitle.current, srConfig());
        sr.reveal(revealArchiveLink.current, srConfig());
        revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }, []);

    const GRID_LIMIT = 6;
    // const projectsData = projects;
    const firstSix = projects.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? projects : firstSix;
    
    return(
        <StyledProjectsSection>
            <h2 ref={revealTitle}>Other Projects</h2>

            <TransitionGroup className="projects-grid">
                {projectsToShow &&
                    projectsToShow.map(({ date, title, github, external, tech1, tech2, tech3, company, text }, i) => {
                        const bigTech = [ tech1, tech2, tech3 ];

                        return (
                            <CSSTransition
                                key={i}
                                classNames="fadeup"
                                exit={false}
                                timeout={500}
                            >
                                <StyledProject
                                    key={i}
                                    rel={el => (revealProjects.current[i] = el)}
                                    tabIndex="0"
                                    style={{
                                        transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                                      }}
                                >
                                    <div className="project-inner">
                                      <header>
                                          <div className="project-top">
                                              <div className="folder">
                                                  <Icon name="Folder" />
                                              </div>
                                              <div className="project-links">
                                              {github && (
                                                <a href={github} aria-label="GitHub Link">
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

                                          <h3 className="project-title">{title}</h3>

                                          <div 
                                            className="project-description"
                                            dangerouslySetInnerHTML={{ __html: text}}
                                          />
                                      </header>

                                      <footer>
                                      {bigTech && (
                                        <ul className="project-tech-list">
                                        {bigTech.map((tech, i) => (
                                            <li key={i}>{tech}</li>
                                        ))}
                                        </ul>
                                        )}
                                      </footer>
                                    </div>
                                </StyledProject>

                            </CSSTransition>
                        );
                    })}
                
            </TransitionGroup>
        </StyledProjectsSection>
    );
};

export default Projects;