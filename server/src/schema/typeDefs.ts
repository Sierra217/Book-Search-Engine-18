import gql from 'graphql-tag';

const typeDefs = gql`

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookId: String!, author: String!, description: String!, title: String!, image: String!, link: String!): User
    removeBook(bookId: String!): User
} 

type Book {
    bookId: ID!
    title: String!
    author: String!
    description: String!
    image: String!
    link: String!
}

type User {
    _id: ID  
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Auth {
    token: String!
    user: User!
}
`;

export default typeDefs;
