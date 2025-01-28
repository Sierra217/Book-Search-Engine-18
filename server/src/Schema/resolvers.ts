import { model } from 'mongoose';
import BookSchema from '../models/Book';
import UserSchema from '../models/User'

const Book = model('Book', BookSchema);
const User = model('User', UserSchema)
interface AddBookArgs {
    title: string;
    author: string;
}

interface AddUserArgs {
    name: string;
    email: string;
}
const resolvers = {
    Query: {
        getBooks: async () => {
            return await Book.find();
        },

        getUsers: async () => {
            return await User.find();
        },
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
                title: args.name,
                author: args.email,
            })
            return await newUser.save();
        }
    }
};

export default resolvers;

