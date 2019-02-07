import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [],
    hasMoreData: true
  };
  loadMorePosts = page => {
    fetch(`https://wptravel.io/wp-json/wp/v2/posts?page=${page}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: [...this.state.posts, ...data] });
      })
      .catch(error => {
        console.error(error);
        this.setState({ hasMoreData: false });
      });
  };

  render() {
    const { posts, hasMoreData } = this.state;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMorePosts}
        hasMore={hasMoreData}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    );
  }
}
