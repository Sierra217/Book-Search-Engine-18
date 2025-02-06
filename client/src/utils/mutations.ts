import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email:$email, password: $password) {
            token
            user {
                username
                email
            }
        }
    }
`;
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                username
                email
            } 
        } 
    }
`;
export const SAVE_BOOK = gql`
    mutation SaveBook($book: BookInput!) {
        saveBook(book: $book) {
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;
export const REMOVE_BOOK = gql`
    mutation RemoveBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;