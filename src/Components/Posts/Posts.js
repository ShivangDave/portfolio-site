import React from 'react';

export default ({ posts }) => {

  return (
    <section id="blog" className={'posts-container'}>
      <div className={'section-header'}>
        <h2 className={'section-title'}>Latest Articles</h2>
        <p className={'section-subtitle'}>
          Insights, tutorials, and thoughts
        </p>
      </div>
      
      <div className={'posts-grid'}>
        {posts.slice(0, 6).map((post, idx) => (
          <a key={idx} href={post.link} target="_blank" rel="noopener noreferrer" className={'post-card'}>
            {post.thumbnail && (
              <img src={post.thumbnail} alt={post.title} className={'post-image'} />
            )}
            <h3 className={'post-title'}>
              {post.title.replace(/&amp;/g, '&')}
            </h3>
            <p className={'post-excerpt'}>
              Read the full article on Medium
            </p>
            <span className={'post-cta'}>
              Read More →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
