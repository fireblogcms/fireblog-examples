import { gql } from 'graphql-request'

export const indexPageQuery = gql`
  query indexPageQuery($blog: ID!, $skip: Int!, $limit: Int!) {
    blog(filter: { _id: { eq: $blog } }) {
      name
      description
    }
    postsCount(filter: { blog: { eq: $blog } })
    posts(
      limit: $limit
      skip: $skip
      sort: { publishedAt: desc }
      filter: { blog: { eq: $blog } }
    ) {
      slug
      title
      teaser
      updatedAt
      publishedAt
      imageThumbnail: image(w: 800, h: 200, fit: crop) {
        url
      }
    }
  }
`
