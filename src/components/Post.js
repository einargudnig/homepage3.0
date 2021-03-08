import { Helmet  } from 'react-helmet';
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import Markdown from 'react-markdown/with-html'
import gfm from 'remark-gfm'
import images from 'remark-images'

import postList from '../posts.json'

const StyledPostContainer = styled.main`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: ${({ theme }) => theme.textMain};
  }

  a {
    text-decoration: underline;
  }

`;


const Post = (props) => {
  console.log(postList)
    const validId = parseInt(props.match.params.id)
    if (!validId) {
      return <Redirect to="/404" />
    }
    const fetchedPost = {}
    postList.forEach((post, i) => {
      if (validId === post.id) {
        fetchedPost.title = post.title ? post.title : "No title given"
        fetchedPost.date = post.date ? post.date : "No date given"
        fetchedPost.author = post.author ? post.author : "No author given"
        fetchedPost.description = post.description ? post.description : "No description given"
        fetchedPost.content = post.content ? post.content : "No content given"
      }
    })
    return (
        <>
        <Helmet title="Blog"/>
        
        <StyledPostContainer>
            <span className="breadcrumb">
                <span className="arrow">&larr;</span>
                <Link to="/blog">All posts</Link>
            </span>

            <StyledPostHeader>
              <h1 className="medium-heading">{fetchedPost.title}</h1>
              <p className="subtitle">
                <time>
                  {new Date(fetchedPost.date).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>&nbsp;&mdash;&nbsp;</span>
              </p>
            </StyledPostHeader>
            
            <StyledPostContent>
              <Markdown plugins ={{gfm, images}} source={fetchedPost.content} escapeHtml={false}/>
            </StyledPostContent>

        </StyledPostContainer>
        </>
    )
}

export default Post