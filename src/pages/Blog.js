import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { IconZap } from '../components/icons';
import postList from '../posts.json'

const StyledMainContainer = styled.main`
  & > header {
    margin-bottom: 100px;
    text-align: center;

    a {
      &:hover,
      &:focus {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto;
      }
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }
`;

const StyledGrid = styled.div`
  margin-top: 50px;

  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

const StyledPostInner = styled.div`
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
  transition: var(--transition);
  background-color: ${({ theme }) => theme.backgroundSecondary};

  header,
  a {
    width: 100%;
  }
`;

const StyledPost = styled.div`
  transition: var(--transition);
  cursor: default;

  &:hover,
  &:focus {
    outline: 0;
    ${StyledPostInner} {
      transform: translateY(-5px);
    }
  }
`;

const StyledPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledFolder = styled.div`
  color: ${({ theme }) => theme.accentColor};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const StyledPostName = styled.h5`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.textMain};
  font-size: var(--fz-xxl);
`;

const StyledPostDescription = styled.div`
  color: ${({ theme }) => theme.textMain};
  font-size: 17px;
`;

const StyledDate = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  text-transform: uppercase;
`;

const StyledTags = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    color: ${({ theme }) => theme.accentColor};
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1.75;

    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
`;

const Blog = () => {

    return(
        <>
        <Helmet title="Blog" />

        <StyledMainContainer>
            <header>
                <h1 className="big-heading">Blog</h1>
                <p className="subtitle">collection of thought, wonderings, reflections and everything in between </p>
            </header>

            <StyledGrid>
              <div className="posts">
                {postList.length &&
                  postList.map((post, i) => {
                    return (
                      <StyledPost key={i} tabIndex="0">
                        <StyledPostInner>
                          <header>
                            <Link to={`/blog/${post.id}`}>
                            <StyledPostHeader>
                              <StyledFolder>
                                <IconZap />
                              </StyledFolder>
                            </StyledPostHeader>
                            <StyledPostName>{post.title}</StyledPostName>
                            <StyledPostDescription>{post.description}</StyledPostDescription>
                            </Link>
                          </header>
                          <footer>
                            <StyledDate>{post.date}</StyledDate>
                          </footer>
                        </StyledPostInner>
                      </StyledPost>
                    )
                  })
                }
              </div>
            </StyledGrid>
        </StyledMainContainer>
        </>
    );
}

export default Blog;