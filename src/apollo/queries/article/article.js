import gql from 'graphql-tag'

const ARTICLE_QUERY = gql`
  query($id: ID!) {
    article(id: $id) {
      id
      title
      description
      slug
      published_at
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

export default ARTICLE_QUERY
