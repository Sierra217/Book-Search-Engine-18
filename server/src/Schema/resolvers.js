import { Book, User } from "../models/index.js";
const resolvers = {
    Query: {
        me: async () => {
            return "Oh hey";
        }
        // getBooks: async () => {
        //     try {
        //         return await Book.find();
        //     } catch (error) {
        //         console.error(error);
        //         throw new Error('Failed to find books.');
        //     }
        // },
        // getUsers: async () => {
        // return await User.find();
    },
    Mutation: {
        saveBook: async (_parent, args) => {
            const newBook = new Book({
                title: args.title,
                author: args.author,
            });
            return await newBook.save();
        },
        addUser: async (_parent, args) => {
            const newUser = new User({
                username: args.username,
                email: args.email,
                password: args.password
            });
            return await newUser.save();
        }
    }
};
export default resolvers;
