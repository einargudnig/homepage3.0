
import { Helmet } from 'react-helmet';

const Head = ({ title, description }) => {
    
  const defaultTitle = 'Hi👋'

    const seo = {
        title: 'Einar Guðni Guðjónsson' || defaultTitle,
        description: 'My personal webpage',
        // url: `${pathname}`,
      };

    return (
        <Helmet title={seo.title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
          <html lang="en" />
    
          <meta name="description" content={seo.description} />
    
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:type" content="website" />
    
        
        </Helmet>
    );
};

export default Head;