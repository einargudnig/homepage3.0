import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';


const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  color: var(--light-yellow);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;

const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;

const StyledHomeButton = styled(Link)`
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
  margin-top: 40px;
`;

const NotFoundPage = () => {

    return (
        <>
        <Helmet title="Page Not Found" />

        <TransitionGroup component={null}>
            <CSSTransition classNames="fadeup" timeout={500}>
                <StyledMainContainer className="fillHeight">
                    <StyledTitle>404</StyledTitle>
                        <StyledSubtitle>Page Not Found</StyledSubtitle>
                            <StyledHomeButton to="/">Go Home</StyledHomeButton>
                </StyledMainContainer>
            </CSSTransition>
        </TransitionGroup>
        </>
    );
};

export default NotFoundPage
