import passport from "passport";
import { Profile, Strategy } from "passport-discord";
import { VerifyCallback } from "passport-oauth2";

passport.use(new Strategy({
    clientID: process.env.APP_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
    callbackURL: process.env.REDIRECT_URL,
    scope: ['identify', 'email', 'guilds', 'connections'],
}, async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
    console.log(accessToken, refreshToken);
    console.log(profile);
}));