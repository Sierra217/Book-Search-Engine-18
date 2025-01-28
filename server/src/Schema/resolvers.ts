import Book from '../models/Book';
import User from '../models/User'


interface AddBookArgs {
    title: string;
    author: string;
}

interface AddUserArgs {
    username: string;
    email: string;
    password: string;
}
const resolvers = {
    Query: {
        getBooks: async () => {
            try {
                return await Book.find();
            } catch (error) {
                console.error(error);
                throw new Error('Failed to find books.');
            }
        },


        getUsers: async () => {
        return await User.find();
         
    },

        Mutation: {
            addBook: async (_parent: undefined, args: AddBookArgs) => {
                const newBook = new Book({
                    title: args.title,
                    author: args.author,
                })
                return await newBook.save();
            },
            AddUser: async (_parent: undefined, args: AddUserArgs) => {
                const newUser = new User({
                    username: args.username,
                    email: args.email,
                    password: args.password
                })
                return await newUser.save();
            }
        }
    }

}
export default resolvers;

