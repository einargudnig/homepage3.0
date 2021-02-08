import { useState } from 'react';
import { 
    BrowserRouter as Router,  
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components'
import { useScrollDirection } from '../hooks/useScrollDirection';
import { navLinks } from '../static/navLinks'
import Menu from './Menu'

import DarkToggle from './DarkToggle';

import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const StyledHeader = styled.header`

    position: fixed;
    top: 0;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    background-color: ${({ theme }) => theme.backgroundMain };
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: var(--transition);display: flex;
    justify-content: space-between;
    align-items: center;

    ${props =>
        props.scrollDirection === 'up' &&
        !props.scrolledToTop &&
        css`
          height: var(--nav-scroll-height);
          transform: translateY(0px);
          background-color: rgba(255, 255, 255, 0.85);
          box-shadow: 0 10px 30px -10px ${({ theme }) => theme.backgroundShadow};
    `};

    ${props =>
        props.scrollDirection === 'down' &&
        !props.scrolledToTop &&
        css`
          height: var(--nav-scroll-height);
          transform: translateY(calc(var(--nav-scroll-height) * -1));
          box-shadow: 0 10px 30px -10px ${({ theme }) => theme.backgroundShadow};
        `};
    
      @media (max-width: 1080px) {
        padding: 0 40px;
      }
      @media (max-width: 768px) {
        padding: 0 25px;
      }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    color: var(--dark-grey);
    font-family: var(--font-mono);
    counter-reset: item 0;
    z-index: 12;
    
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    
        a {
          color: ${({ theme }) => theme.accentColor};
          width: 42px;
          height: 42px;
    
          &:hover,
          &:focus {
            svg {
              fill: ${({ theme }) => theme.accentTint};
            }
          }
    
          svg {
            fill: none;
            transition: var(--transition);
            user-select: none;
          }
        }
      }
`;

const StyledLinks = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
    display: none;
    }

    ol {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
    
        li {
          margin: 0 5px;
          position: relative;
          counter-increment: item 1;
          font-size: var(--fz-xs);
    
          a {
            padding: 10px;
    
            &:before {
              content: '0' counter(item) '.';
              margin-right: 5px;
              color: ${({ theme }) => theme.accentColor};
              font-size: var(--fz-xxs);
              text-align: right;
            }
          }
        }
      }
`;



const Nav = ({ theme, toggleTheme }) => {
    
    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    // useEffect for isHome
    // Do need to use ishome?

    return (
        <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
            <StyledNav>
                <Router>
                <TransitionGroup component={null}>
                    
                    <CSSTransition classNames="fade" timeout={500}>
                        <div className="logo" tabIndex="-1">
                            <a href="/" aria-label="home">
                                <h3>&lsaquo;Einar&rsaquo;</h3>
                            </a>

                        </div>
                    </CSSTransition>
                    
                </TransitionGroup>

                <StyledLinks>
                    <ol>
                        <TransitionGroup component={null}>
                        {navLinks.map(({ name, url}, i) => (
                            <CSSTransition key={i} classNames="fadedown" timeout={500}>
                                <li>
                                    <a href={url}>{name}</a>
                                </li>                                
                            </CSSTransition>
                        ))}
                       

                        </TransitionGroup>
                    </ol>

                    <TransitionGroup component={null}>
                        <CSSTransition classNames="fadedown" timeout={500}>
                        <DarkToggle theme={theme} toggleTheme={toggleTheme}/>
                        </CSSTransition>
                    </TransitionGroup>
                </StyledLinks>

                {/* ADD HAMBURGER MENU */}
                <TransitionGroup component={null}>
                    <CSSTransition classNames="fade" timeout={500}>
                        <Menu theme={theme} toggleTheme={toggleTheme}/>
                    </CSSTransition>
                </TransitionGroup>
                
                </Router>
            </StyledNav>
        </StyledHeader>
    );
};

export default Nav;