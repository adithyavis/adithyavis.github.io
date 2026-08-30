import { articles } from '../data/articles'
import { SectionLabel } from './SectionLabel'
import './Articles.css'

export function Articles() {
  return (
    <>
      <SectionLabel>Writing</SectionLabel>
      <div className="card articles-card stagger">
        {articles.map((article, index) => {
          const classNames = ['article-row']
          if (article.featured) classNames.push('article-featured')
          if (index === articles.length - 1) classNames.push('article-last')

          return (
            <a
              className={classNames.join(' ')}
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="article-meta">
                {article.tag && <span className="article-tag">{article.tag}</span>}
                <span className="article-date">{article.date}</span>
              </div>
              <div className="article-title">{article.title}</div>
              <div className="article-arrow">↗</div>
            </a>
          )
        })}
      </div>
    </>
  )
}
