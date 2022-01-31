import {gql} from 'graphql-tag';

export const GET_ALL_POST = gql`
  query Posts($where: PostWhereInput) {
    posts(where: $where) {
      coverUrl
      createdAt
      id
      publishedAt
      createdAt
      coverUrl
      shortDescription
      stage
      title
      categorie
    }
  }
`;

export const GET_POST = gql`
  query Post($id: ID!) {
    post(where: {id: $id}) {
      coverUrl
      createdAt
      id
      publishedAt
      createdAt
      coverUrl
      shortDescription
      description {
        text
      }
      title
      categorie
    }
  }
`;
