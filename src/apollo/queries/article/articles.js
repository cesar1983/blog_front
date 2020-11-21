import gql from 'graphql-tag'

const ARTICLES_QUERY = gql`
  query Articles {
    articles(sort: "id:desc", last: 10) {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`

export default ARTICLES_QUERY
