import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($email: String!, $bookId: String!) {
    deleteBook(email: $email, bookId: $bookId) {
      _id
      email
      username
      savedBooks {
        _id
        bookId
        authors
        description
        title
        image
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $email: String!,
    $bookId: String!,
    $authors: [String],
    $description: String!,
    $title: String!,
    $image: String,
    ) {
    saveBook(
      email: $email,
      bookId: $bookId,
      authors: $authors,
      description: $description,
      title: $title,
      image: $image,
  ) {
        _id
        email
        username
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
