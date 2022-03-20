import express, { application, Express } from "express";
import routes from '../routes';
import cors from 'cors';
import passport from "passport";
import session from 'express-session';

export function createApp(): Express {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(cors({ origin: ['https://localhost:3000'], credentials: true }));
    app.use(session({secret: 'AKJKDBSDHASBDASDKASJDADJANSD', resave: false, saveUninitialized: false, cookie: { maxAge: 604800000 }}))
    app.use('/api', routes);    
    return app;
}