import Articles from 'components/articles'
import Query from 'components/query'
import ARTICLES_QUERY from 'apollo/queries/article/articles'

const Home = () => {
  return (
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1>Strapi blog</h1>
        <Query query={ARTICLES_QUERY}>
          {({ data: { articles } }) => {
            return <Articles articles={articles} />
          }}
        </Query>
      </div>
    </div>
  )
}

export default Home
