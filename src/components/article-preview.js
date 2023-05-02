import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Masonry from 'react-responsive-masonry'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <Masonry columnsCount={3} gutter="1rem">
        {posts.map((post) => {
          return (
            <Link to={`/blog/${post.slug}`} className={styles.imagelink}>
              <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
              <div class={styles.tapa}>
                <h2>{post.title}</h2>
                <p>{renderRichText(post.description)}</p>
              </div>
            </Link>
          )
        })}
      </Masonry>
    </Container>
    // <Container>
    //   <ul className={styles.articleList}>
    //     {posts.map((post) => {
    //       return (
    //         <li key={post.slug}>
    //           <Link to={`/blog/${post.slug}`} className={styles.link}>
    //             <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
    //             <h2 className={styles.title}>{post.title}</h2>
    //           </Link>
    //           <div>
    //             {post.description?.raw && renderRichText(post.description)}
    //           </div>
    //           <div className={styles.meta}>
    //             <small className="meta">{post.publishDate}</small>
    //             <Tags tags={post.tags} />
    //           </div>
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </Container>
  )
}

export default ArticlePreview
