import User from '@/models/user';
import { connectToDB } from '@/utils/connectToDb';

import { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'jsmith@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'John Smith',
        },
      },
      async authorize(credentials) {
        // check to see if email and password is there
        // console.log(credentials);

        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter an email and password');
        }

        // check to see if user exists
        await connectToDB();

        const user = await User.findOne({ email: credentials.email });

        // if no user was found
        if (!user || !user.password) {
          throw new Error('No user found');
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        // if password does not match
        if (!passwordMatch) {
          throw new Error('Incorrect password');
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      //! store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user?.email });
      session.user.id = sessionUser._id;
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      if (account?.provider === 'credentials') {
        // console.log(account?.provider);
        return true;
      }

      try {
        await connectToDB();

        //! check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        //! if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(' ', '').toLowerCase(),
            image: profile?.image,
          });
        }
        return true;
      } catch (error) {
        console.log(
          'Error checking if user exists: ',
          (error as Error).message
        );
        return true;
      }
    },
  },
  secret: process.env.JWT_SECRET,
  session: {
    strategy: 'jwt',
  },
};

export const getAuthSession = () => getServerSession(authOptions);
