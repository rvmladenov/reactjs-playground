import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../../containers/Posts/Posts';
// import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';

const NewPost = React.lazy(() => import('../NewPost/NewPost') )

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to='/'>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/new-post" render={() => (
                        <Suspense fallback="Loading">
                            <NewPost />
                        </Suspense>
                    )} />
                    {/* <Route path="/new-post" component={NewPost} /> */}
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Route path="/posts" exact component={Posts} />
                    <Redirect exact from="/" to="/posts" />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;