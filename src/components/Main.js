import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import NotFoundPage from '../pages/404'
import Post  from "../components/Post";

/***
 * This is simply just a Router for my pages, this will render the page that
 * the website will be using.
 * https://blog.pusher.com/getting-started-with-react-router-v4/ used this one as a reference
 */

const Main = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path ="/404" component={NotFoundPage} />
            <Route exact path="/blog/:id" render={props => <Post {...props}/>} />
        </Switch>
    </Router>
);

export default Main;