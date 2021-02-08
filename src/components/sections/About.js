import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '../../utils/config'
import sr from '../../utils/sr';
import avatar from '../../static/avatarComp.jpg'

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.accentColor};
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
    a {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
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
  }
`;

const About = () => {

    const revealContainer = useRef(null);

    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig());
      }, []);

    const skills = ['JavaScript', 'React', 'Tailwind CSS',]

    return(
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Hello! I'm Einar Guðni, a recently graduated software developer and live in Reykjavík,
                            Iceland.
                        </p>

                        <p>
                            I enjoy creating many different things, whether that be websites, applications, or anything in
                            between. I'm passionate to learn new things and constantly try to better my projects.
                        </p>

                        <p>
                            Shortly after graduating from <a href="https://www.hi.is/">University of Iceland</a>,
                            I joined the team at <a href="https://maul.is/">Maul</a> where I work on a wide
                            variety of exciting and fun projects.
                        </p>

                        <p>Here are a some of the technologies I've been using recently:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <img src={avatar} alt="avatar" className="img" height="400px" width="300px" />
                    </div>
                </StyledPic>
                
            </div>

        </StyledAboutSection>
    );
};

export default About;