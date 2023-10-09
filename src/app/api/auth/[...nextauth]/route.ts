import NexthAuth from 'next-auth';
import GoogleProvider from  'next-auth/providers/google';


const handler = NexthAuth({
    providers:[GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
    }),
],
});

export { handler as GET, handler as POST}