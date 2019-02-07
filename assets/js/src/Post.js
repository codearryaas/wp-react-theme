import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    const {
      id,
      link,
      format,
      guid,
      title,
      excerpt,
      _custom_data: { author, date, categories, tags, featured_image }
    } = this.props.post;

    return (
      <div>
        <article
          id={`post-${id}`}
          className={`post-${id} post type-post status-publish format-${format} entry`}
        >
          <header className="entry-header">
            <h2 className="entry-title">
              <a href={link} rel="bookmark" dangerouslySetInnerHTML={{ __html: title.rendered }}/>
            </h2>
          </header>

          <div className="entry-content">
            {featured_image && (
              <figure style={{ width: 435 }} className="wp-caption alignnone">
                <img
                  className="wp-image-59"
                  alt="Boat"
                  src={featured_image.url}
                  width="435"
                  height="288"
                />
                <figcaption className="wp-caption-text">
                  {featured_image.caption}
                </figcaption>
              </figure>
            )}
            <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
          </div>

          <footer className="entry-footer">
            <span className="byline">
              <svg
                className="svg-icon"
                width="16"
                height="16"
                aria-hidden="true"
                role="img"
                focusable="false"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <span className="screen-reader-text">Posted by</span>
              <span className="author vcard">
                <a className="url fn n" href={author.url}>
                  {author.name}
                </a>
              </span>
            </span>
            <span className="posted-on">
              <svg
                className="svg-icon"
                width="16"
                height="16"
                aria-hidden="true"
                role="img"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <defs>
                  <path id="a" d="M0 0h24v24H0V0z" />
                </defs>
                <clipPath id="b">
                  <use href="#a" overflow="visible" />
                </clipPath>
                <path
                  clipPath="url(#b)"
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
                />
              </svg>
              <a href={link} rel="bookmark">
                <time className="entry-date published" dateTime={date}>
                  {date}
                </time>
              </a>
            </span>
            {categories && (
              <span className="cat-links">
                <svg
                  className="svg-icon"
                  width="16"
                  height="16"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <span className="screen-reader-text">Posted in</span>
                {categories
                  .map(categorie => (
                    <a key={categorie.url} href={categorie.url} rel="category">
                      {categorie.name}
                    </a>
                  ))
                  .reduce((prev, curr) => [prev, ', ', curr])}
              </span>
            )}
            {tags && (
              <span className="tags-links">
                <svg
                  className="svg-icon"
                  width="16"
                  height="16"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <span className="screen-reader-text">Tags: </span>
                {tags
                  .map(tag => (
                    <a key={tag.url} href={tag.url} rel="tag">
                      {tag.name}
                    </a>
                  ))
                  .reduce((prev, curr) => [prev, ', ', curr])}
              </span>
            )}
          </footer>
        </article>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};
