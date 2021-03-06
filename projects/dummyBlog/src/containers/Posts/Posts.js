import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const slicedPosts = response.data.slice(0, 4);
                const updatedPosts = slicedPosts.map(post => {
                    return {
                        ...post,
                        author: 'rvm'
                    };
                })
                this.setState({posts: updatedPosts});
            })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };

    render() {

        const posts = this.state.posts.map(post => {
            return <Link to={'/posts/' + post.id} key={post.id}><Post
                title={post.title}
                author={post.author}
                clicked={() => {
                    this.postSelectedHandler(post.id) 
                }} /></Link>
        });

        return (<section className="Posts">
                {posts}
            </section>
        )
    };
}

export default Posts;